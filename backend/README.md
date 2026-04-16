# Molsys Internship Application Backend

Complete backend integration for the Molsys Careers page with MongoDB and file uploads.

## 📋 Project Structure

```
backend/
├── models/
│   └── Application.js      # MongoDB Schema
├── uploads/                # Resume files storage
├── server.js              # Express server
├── package.json           # Dependencies
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🚀 Quick Start

### 1️⃣ Install Dependencies

```bash
cd backend
npm install
```

### 2️⃣ Setup MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free account
3. Create a cluster
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/molsys`
5. Copy to `.env` file

**Option B: Local MongoDB**

```
MONGODB_URI=mongodb://localhost:27017/molsys
```

### 3️⃣ Create .env File

```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/molsys
PORT=5000
```

### 4️⃣ Run Server

```bash
npm start
```

You should see:

```
✅ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
📝 API Endpoint: POST http://localhost:5000/apply
📊 View Applications: GET http://localhost:5000/applications
```

## 📡 API Endpoints

### Submit Application (with Resume)

**POST** `http://localhost:5000/apply`

**Form Data:**

```
fullName: string
email: string
phone: string
location: string
degree: string
fieldOfStudy: string
university: string
graduationYear: string
roleApplying: string
skills: string
languages: string
tools: string
projects: string
github: string
resume: file (PDF only, max 5MB)
isFresher: boolean
```

**Response:**

```json
{
  "message": "Application submitted successfully!",
  "applicationId": "507f1f77bcf86cd799439011"
}
```

### Get All Applications

**GET** `http://localhost:5000/applications`

**Response:**

```json
{
  "count": 5,
  "applications": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john@example.com",
      "roleApplying": "ai-ml",
      "resume": "/uploads/123456-resume.pdf",
      "createdAt": "2024-04-16T10:30:00Z"
    }
  ]
}
```

### Get Single Application

**GET** `http://localhost:5000/applications/:id`

## 📁 Resume Storage

Resumes are saved in: `backend/uploads/`

Format: `timestamp-randomid-filename.pdf`

## 🔍 Debugging

**Issue: Connection refused**

```
❌ Error: connect ECONNREFUSED 127.0.0.1:5000
```

→ Backend not running. Run `npm start`

**Issue: MongoDB connection error**

```
❌ MongoDB Connection Error: authentication failed
```

→ Check MongoDB URI in `.env` file

**Issue: File upload fails**

```
Error: Only PDF files are allowed
```

→ Make sure you upload a PDF file (max 5MB)

## 🛠️ Development

Install nodemon for auto-restart:

```bash
npm install --save-dev nodemon
npm run dev
```

## 📝 MongoDB Collections

Applications are stored in:

```
Database: molsys
Collection: applications
```

## 🔐 Security Notes

- Keep `.env` file secret (never commit)
- Resume size limit: 5MB
- Only PDF files accepted
- Add authentication for admin routes later
- Validate all inputs on backend

## 📚 MongoDB Atlas Setup

1. Create free cluster: https://cloud.mongodb.com/
2. Add user: Database Access → Add Database User
3. Get connection string: Databases → Connect → Drivers
4. Replace `<password>` and `<username>` in URI
5. Add `/molsys` at the end (database name)

## 🚀 Production Deployment

For production, use services like:

- **Vercel/Heroku** for backend hosting
- **AWS S3** for resume storage
- **MongoDB Atlas** for database (already cloud)

## 📞 Support

For issues, check:

1. MongoDB connection string in `.env`
2. Node modules installed (`npm install`)
3. Backend running on port 5000
4. React frontend calling correct endpoint
