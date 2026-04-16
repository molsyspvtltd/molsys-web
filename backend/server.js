const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const Application = require("./models/Application");

const app = express();

// ===================================
// MIDDLEWARE
// ===================================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

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
// FILE UPLOAD SETUP
// ===================================

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
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

    // Create new application
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
      resume: req.file ? `/uploads/${req.file.filename}` : null,
      isFresher: isFresher === "true" || isFresher === true,
    });

    // Save to database
    await newApplication.save();

    console.log("✅ Application saved:", {
      name: fullName,
      email: email,
      role: roleApplying,
      resumeFile: req.file ? req.file.filename : "No file uploaded",
    });

    res.status(201).json({
      message: "Application submitted successfully!",
      applicationId: newApplication._id,
    });
  } catch (error) {
    console.error("❌ Error saving application:", error.message);
    res.status(500).json({
      error: "Failed to submit application",
      details: error.message,
    });
  }
});

// GET - Retrieve all applications (Admin only - no auth for now)
app.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json({
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

// GET - Get single application by ID
app.get("/applications/:id", async (req, res) => {
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
