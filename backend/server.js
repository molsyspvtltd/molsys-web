const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const mime = require("mime-types");
require("dotenv").config();

const Application = require("./models/Application");

const app = express();

// ===================================
// MIDDLEWARE
// ===================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===================================
// MONGODB CONNECTION
// ===================================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// ===================================
// ADMIN AUTHENTICATION
// ===================================

const ADMIN_KEY = process.env.ADMIN_KEY;

if (!ADMIN_KEY) {
  console.error("❌ FATAL ERROR: ADMIN_KEY not found in environment variables");
  console.error("Please add ADMIN_KEY=your_key in .env file");
  process.exit(1);
}

// Admin auth middleware
const adminAuth = (req, res, next) => {
  const key = req.headers["x-admin-key"];

  if (!key || key !== ADMIN_KEY) {
    return res.status(403).json({ error: "Unauthorized - Invalid admin key" });
  }

  next();
};

// ===================================
// AWS S3 FILE UPLOAD SETUP
// ===================================

// AWS config
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new aws.S3();

// Upload to S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "molsys-sra-bucket",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const fileName =
        "molsys-internship-resumes/" +
        Date.now().toString() +
        "-" +
        file.originalname;
      cb(null, fileName);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF allowed"), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// ===================================
// ROUTES
// ===================================

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Molsys Internship Backend API Running ✅" });
});

// POST - Submit Application
app.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    // Extract form data
    const {
      fullName,
      email,
      phone,
      location,
      degree,
      fieldOfStudy,
      university,
      graduationYear,
      roleApplying,
      skills,
      languages,
      tools,
      projects,
      github,
      isFresher,
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !roleApplying) {
      return res.status(400).json({
        error: "Missing required fields: fullName, email, phone, roleApplying",
      });
    }

    // Check if application already exists for this email
    const existingApplication = await Application.findOne({ email });

    if (existingApplication) {
      // Update existing application
      existingApplication.fullName = fullName;
      existingApplication.phone = phone;
      existingApplication.location = location;
      existingApplication.degree = degree;
      existingApplication.fieldOfStudy = fieldOfStudy;
      existingApplication.university = university;
      existingApplication.graduationYear = graduationYear;
      existingApplication.roleApplying = roleApplying;
      existingApplication.skills = skills;
      existingApplication.languages = languages;
      existingApplication.tools = tools;
      existingApplication.projects = projects;
      existingApplication.github = github;
      existingApplication.isFresher =
        isFresher === "true" || isFresher === true;
      if (req.file) {
        existingApplication.resume = req.file.location;
      }

      await existingApplication.save();

      console.log("✅ Application updated:", {
        name: fullName,
        email: email,
        role: roleApplying,
        resumeFile: req.file ? req.file.key : "No file uploaded",
      });

      return res.status(200).json({
        message: "Application updated successfully!",
        applicationId: existingApplication._id,
        isUpdate: true,
      });
    }

    // Create new application if email doesn't exist
    const newApplication = new Application({
      fullName,
      email,
      phone,
      location,
      degree,
      fieldOfStudy,
      university,
      graduationYear,
      roleApplying,
      skills,
      languages,
      tools,
      projects,
      github,
      resume: req.file ? req.file.location : null,
      isFresher: isFresher === "true" || isFresher === true,
    });

    // Save to database
    await newApplication.save();

    console.log("✅ Application saved:", {
      name: fullName,
      email: email,
      role: roleApplying,
      resumeFile: req.file ? req.file.key : "No file uploaded",
    });

    res.status(201).json({
      message: "Application submitted successfully!",
      applicationId: newApplication._id,
      isUpdate: false,
    });
  } catch (error) {
    console.error("❌ Error saving application:", error.message);
    res.status(500).json({
      error: "Failed to submit application",
      details: error.message,
    });
  }
});

// GET - Retrieve all applications (Admin protected)
// Returns unique applicants by email (latest submission only)
// Query params: ?page=1&limit=10 (default: page 1, limit 10 per page)
app.get("/applications", adminAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count of unique applicants
    const totalCountPipeline = [
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$email",
        },
      },
      {
        $count: "total",
      },
    ];

    const countResult = await Application.aggregate(totalCountPipeline);
    const totalCount = countResult.length > 0 ? countResult[0].total : 0;
    const totalPages = Math.ceil(totalCount / limit);

    // Get paginated applications
    const applications = await Application.aggregate([
      { $sort: { createdAt: -1 } }, // latest first

      {
        $group: {
          _id: "$email",
          fullName: { $first: "$fullName" },
          email: { $first: "$email" },
          phone: { $first: "$phone" },
          location: { $first: "$location" },
          degree: { $first: "$degree" },
          fieldOfStudy: { $first: "$fieldOfStudy" },
          university: { $first: "$university" },
          graduationYear: { $first: "$graduationYear" },
          roleApplying: { $first: "$roleApplying" },
          skills: { $first: "$skills" },
          languages: { $first: "$languages" },
          tools: { $first: "$tools" },
          projects: { $first: "$projects" },
          github: { $first: "$github" },
          resume: { $first: "$resume" },
          isFresher: { $first: "$isFresher" },
          createdAt: { $first: "$createdAt" },
        },
      },

      {
        $project: {
          _id: 0,
          fullName: 1,
          email: 1,
          phone: 1,
          location: 1,
          degree: 1,
          fieldOfStudy: 1,
          university: 1,
          graduationYear: 1,
          roleApplying: 1,
          skills: 1,
          languages: 1,
          tools: 1,
          projects: 1,
          github: 1,
          resume: 1,
          isFresher: 1,
          createdAt: 1,
        },
      },

      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ]);

    res.json({
      pagination: {
        currentPage: page,
        limit: limit,
        totalCount: totalCount,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      count: applications.length,
      applications: applications,
    });
  } catch (error) {
    console.error("❌ Error fetching applications:", error.message);
    res.status(500).json({
      error: "Failed to fetch applications",
      details: error.message,
    });
  }
});

// GET - Get single application by ID (Admin protected)
app.get("/applications/:id", adminAuth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.json(application);
  } catch (error) {
    console.error("❌ Error fetching application:", error.message);
    res.status(500).json({
      error: "Failed to fetch application",
      details: error.message,
    });
  }
});

// ===================================
// ERROR HANDLING
// ===================================

app.use((err, req, res, next) => {
  console.error("⚠️ Error:", err.message);
  res.status(500).json({ error: err.message });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ===================================
// START SERVER
// ===================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API Endpoint: POST http://localhost:${PORT}/apply`);
  console.log(
    `📊 View Applications: GET http://localhost:${PORT}/applications`,
  );
});
