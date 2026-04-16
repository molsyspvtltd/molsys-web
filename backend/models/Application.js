const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: String,
    degree: String,
    fieldOfStudy: String,
    university: String,
    graduationYear: String,
    roleApplying: {
      type: String,
      required: true,
    },
    skills: String,
    languages: String,
    tools: String,
    projects: String,
    github: String,
    resume: String,
    isFresher: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", ApplicationSchema);
