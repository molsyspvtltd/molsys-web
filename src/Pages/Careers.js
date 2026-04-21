import React, { useState } from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import "./Careers.css";

// ============================================
// STYLED COMPONENTS
// ============================================

const CareersContainer = styled.div`
  width: 100%;
  background: #ffffff;
  color: #1f2937;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 50%, #dbeafe 100%);
  overflow: hidden;
  padding: 80px 20px;
  margin-top: 70px;

  @media (max-width: 480px) {
    min-height: 500px;
    padding: 50px 16px;
    margin-top: 60px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 50%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(168, 85, 247, 0.1) 0%,
        transparent 50%
      );
    animation: gradientShift 8s ease infinite;
  }

  @keyframes gradientShift {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 40px;
    line-height: 1.8;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const Badge = styled.span`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #1f2937;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.8s ease-out ${(props) => props.delay || "0s"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${(props) =>
    props.primary
      ? `
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: #fff;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
    }
  `
      : `
    background: transparent;
    color: #1f2937;
    border: 2px solid #1f2937;

    &:hover {
      background: #1f2937;
      color: #fff;
      transform: translateY(-3px);
    }
  `}

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const NvidiaSection = styled.section`
  padding: 60px 20px;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const NvidiaContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.8s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

const OverviewSection = styled.section`
  padding: 60px 20px;
  background: #f9fafb;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 50px;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const OverviewCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease-out ${(props) => props.delay || "0s"};

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    border-color: #3b82f6;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.15);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #3b82f6;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    font-weight: 700;
    color: #1f2937;
  }

  p {
    color: #6b7280;
    font-size: 0.95rem;
  }
`;

const RolesSection = styled.section`
  padding: 80px 20px;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const RolesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border-radius: 16px;
  padding: 60px 40px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 16px;
    border-radius: 12px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #1f2937;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 30px;
    }

    @media (max-width: 480px) {
      font-size: 1.3rem;
      margin-bottom: 25px;
    }
  }
`;

const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const RoleCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 30px;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  animation: fadeIn 0.6s ease-out ${(props) => props.delay || "0s"};

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: #3b82f6;
    box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15);

    &::before {
      opacity: 1;
    }

    .pdf-btn {
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    }
  }
`;

const RoleTag = styled.span`
  display: inline-block;
  background: ${(props) => {
    switch (props.type) {
      case "bio":
        return "linear-gradient(135deg, #10b981 0%, #059669 100%)";
      case "ai":
        return "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)";
      case "frontend":
        return "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
      case "backend":
        return "linear-gradient(135deg, #f97316 0%, #ea580c 100%)";
      default:
        return "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)";
    }
  }};
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: #1f2937;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const RoleDescription = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Skill = styled.span`
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #1f2937;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const DurationBadge = styled.div`
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #3b82f6;
  }
`;

const PdfBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.5);
    color: #fff;
    text-decoration: none;
  }
`;

const WhyJoinSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const WhyJoinContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const WhyJoinList = styled.ul`
  list-style: none;
  padding: 0;
`;

const WhyJoinItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 1.05rem;
  color: #1f2937;
  line-height: 1.8;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    gap: 12px;
    margin-bottom: 18px;
  }

  &::before {
    content: "✓";
    color: #10b981;
    font-weight: 900;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const WhyJoinImage = styled.div`
  background: linear-gradient(
    135deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
  border-radius: 12px;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  svg {
    font-size: 120px;
    color: rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 768px) {
    padding: 40px;
    min-height: 300px;

    svg {
      font-size: 80px;
    }
  }
`;

const FinalCTASection = styled.section`
  padding: 100px 20px;
  background: #f9fafb;
  text-align: center;

  @media (max-width: 480px) {
    padding: 50px 16px;
  }
`;

const FinalCTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 24px;
    color: #1f2937;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
    margin-bottom: 40px;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }
  }
`;

// MODAL STYLES
const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
  overflow-y: auto;
  padding: 20px;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid #e5e7eb;
  animation: slideUp 0.4s ease;
  position: relative;
  z-index: 10000;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    width: 98%;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 10px;
  transition: color 0.3s ease;
  z-index: 10;

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    font-size: 1.3rem;
  }

  &:hover {
    color: #3b82f6;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  clear: both;
`;

const Label = styled.label`
  display: block;
  color: #374151;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.9rem;

  .required {
    color: #ef4444;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #1f2937;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #1f2937;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  option {
    background: #ffffff;
    color: #1f2937;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #1f2937;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4b5563;
  font-size: 0.9rem;
  cursor: pointer;
  margin: 20px 0;

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #3b82f6;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// ============================================
// INTERNSHIP DATA (COMMENTED OUT - HIRING CLOSED)
// ============================================

/*
const internshipRoles = [
  {
    id: 1,
    tag: "bio",
    title: "Genome-informatics Intern",
    description:
      "Work on WGS pipelines, variant analysis, and genomic data processing",
    skills: ["Python", "Bioinformatics", "Genomics", "Linux", "Data Analysis"],
    duration: "1 Month Internship",
    pdf: "/genome.pdf",
  },
  {
    id: 2,
    tag: "ai",
    title: "AI/ML Intern",
    description:
      "Apply machine learning and deep learning models to genomic datasets",
    skills: ["Python", "TensorFlow", "PyTorch", "ML", "Data Science"],
    duration: "1 Month Internship",
    pdf: "/aiml.pdf",
  },
  {
    id: 3,
    tag: "frontend",
    title: "Frontend Developer Intern",
    description: "Build AI-integrated UI using React and mobile frameworks",
    skills: ["React", "JavaScript", "CSS", "UI/UX", "TypeScript"],
    duration: "1 Month Internship",
    pdf: "/frontend.pdf",
  },
  {
    id: 4,
    tag: "backend",
    title: "Backend Developer Intern",
    description:
      "Develop scalable APIs and integrate AI services into backend systems",
    skills: ["Node.js", "MongoDB", "REST APIs", "System Design", "DevOps"],
    duration: "1 Month Internship",
    pdf: "/backend.pdf",
  },
];
*/

// ============================================
// CLOSING MESSAGE STYLED COMPONENT
// ============================================

const ClosedMessageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  padding: 40px 20px;
  margin-top: 70px;
`;

const ClosedMessageContent = styled.div`
  max-width: 700px;
  text-align: center;
  background: #ffffff;
  padding: 60px 40px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  animation: fadeInUp 0.8s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 40px 25px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }

  .icon {
    font-size: 5rem;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 12px;

    @media (max-width: 480px) {
      font-size: 0.95rem;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .highlight {
    color: #3b82f6;
    font-weight: 600;
  }

  .footer-text {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #e5e7eb;
    font-size: 0.9rem;
    color: #9ca3af;
  }
`;

// ============================================
// MAIN COMPONENT
// ============================================

function Careers() {
  /*
  // ============================================
  // STATE MANAGEMENT (COMMENTED OUT - HIRING CLOSED)
  // ============================================

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    degree: "",
    fieldOfStudy: "",
    university: "",
    graduationYear: "",
    roleApplying: "",
    skills: "",
    languages: "",
    tools: "",
    projects: "",
    github: "",
    resume: null,
    isFresher: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.isFresher) {
      alert("You must be a fresher to apply");
      return;
    }

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await fetch(
        "https://internship-backend-t60m.onrender.com/apply",
        {
          method: "POST",
          body: data,
        },
      );

      const result = await res.json();

      if (res.ok) {
        alert("Application submitted successfully!");
        setIsModalOpen(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          degree: "",
          fieldOfStudy: "",
          university: "",
          graduationYear: "",
          roleApplying: "",
          skills: "",
          languages: "",
          tools: "",
          projects: "",
          github: "",
          resume: null,
          isFresher: false,
        });
      } else {
        alert("Error: " + (result.error || "Failed to submit"));
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again or contact support.");
    }
  };
  */

  // ============================================
  // MAIN RETURN - HIRING CLOSED MESSAGE
  // ============================================

  return (
    <CareersContainer>
      <ClosedMessageContainer>
        <ClosedMessageContent>
          <div className="icon">✨</div>
          <h1>Thank You for Your Interest!</h1>
          <p>
            We appreciate your enthusiasm about joining the Molsys team. Our
            <span className="highlight"> internship recruitment process </span>
            for this cycle has now concluded.
          </p>
          <p>
            We had an overwhelming response from talented candidates, and we're
            grateful for the opportunity to work with brilliant minds.
          </p>
          <p style={{ marginBottom: "24px" }}>
            We encourage you to stay tuned for future opportunities by visiting
            our careers page periodically. If you meet the requirements for
            future openings, we'd love to hear from you!
          </p>

          <p style={{ color: "#3b82f6", fontSize: "1rem", fontWeight: "600" }}>
            🚀 Keep innovating. Great opportunities are coming!
          </p>
        </ClosedMessageContent>
      </ClosedMessageContainer>

      {/* 
      ============================================
      ALL PREVIOUS SECTIONS COMMENTED OUT
      ============================================

      {/* HERO SECTION */}
      {/* <HeroSection>
        <HeroContent>
          <h1>Build the Future of AI & Genomics</h1>
          <p>
            Work on real-world datasets, AI models, and production systems in a
            1-month intensive internship.
          </p>

          <BadgesContainer>
            <Badge delay="0.1s">🧬 Genomics</Badge>
            <Badge delay="0.2s">🤖 AI/ML</Badge>
            <Badge delay="0.3s">⚙️ Engineering</Badge>
            <Badge delay="0.4s">🎨 Product Development</Badge>
          </BadgesContainer>

          <ButtonGroup>
            <Button
              primary
              onClick={() =>
                document
                  .getElementById("roles")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Open Roles
            </Button>
            <Button onClick={() => setIsModalOpen(true)}>Apply Now</Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* NVIDIA INCEPTION SECTION */}
      {/* <NvidiaSection>
        <NvidiaContent>
          <img
            src="/internship.png"
            alt="Molsys joining NVIDIA Inception Program - Welcome to the AI age of genomics"
          />
        </NvidiaContent>
      </NvidiaSection>

      {/* OVERVIEW SECTION */}
      {/* <OverviewSection>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionTitle>Why This Internship?</SectionTitle>
          <OverviewGrid>
            <OverviewCard delay="0s">
              <div className="icon">⏳</div>
              <h3>1 Month Duration</h3>
              <p>Intensive focus, real impact</p>
            </OverviewCard>
            <OverviewCard delay="0.1s">
              <div className="icon">💰</div>
              <h3>Fixed Stipend</h3>
              <p>Competitive compensation</p>
            </OverviewCard>
            <OverviewCard delay="0.2s">
              <div className="icon">🎓</div>
              <h3>Freshers Only</h3>
              <p>Perfect start to your career</p>
            </OverviewCard>
            <OverviewCard delay="0.3s">
              <div className="icon">🧠</div>
              <h3>Real-world Projects</h3>
              <p>Production-level exposure</p>
            </OverviewCard>
          </OverviewGrid>
        </div>
      </OverviewSection>

      {/* ROLES SECTION */}
      {/* <RolesSection id="roles">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <RolesContainer>
            <h2>Explore Internship Roles</h2>
            <RolesGrid>
              {internshipRoles.map((role, idx) => (
                <RoleCard key={role.id} delay={`${idx * 0.1}s`}>
                  <RoleTag type={role.tag}>{role.tag}</RoleTag>
                  <RoleTitle>{role.title}</RoleTitle>
                  <RoleDescription>{role.description}</RoleDescription>

                  <h4
                    style={{
                      color: "#374151",
                      fontSize: "0.9rem",
                      marginBottom: "8px",
                    }}
                  >
                    Key Skills:
                  </h4>
                  <SkillsContainer>
                    {role.skills.map((skill) => (
                      <Skill key={skill}>{skill}</Skill>
                    ))}
                  </SkillsContainer>

                  <DurationBadge>
                    <Icon.Clock /> {role.duration}
                  </DurationBadge>

                  <PdfBtn href={role.pdf} download className="pdf-btn">
                    <Icon.Download /> View Details
                  </PdfBtn>
                </RoleCard>
              ))}
            </RolesGrid>
          </RolesContainer>
        </div>
      </RolesSection>

      {/* WHY JOIN SECTION */}
      {/* <WhyJoinSection>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionTitle>Why Join Molsys?</SectionTitle>
          <WhyJoinContent>
            <div>
              <WhyJoinList>
                <WhyJoinItem>
                  Real-world genomic and biomedical datasets
                </WhyJoinItem>
                <WhyJoinItem>
                  Mentorship from AI and genomics experts
                </WhyJoinItem>
                <WhyJoinItem>Hands-on AI & ML applied to genomics</WhyJoinItem>
                <WhyJoinItem>Production-level code exposure</WhyJoinItem>
                <WhyJoinItem>Certificate of completion</WhyJoinItem>
                <WhyJoinItem>Potential for future opportunities</WhyJoinItem>
              </WhyJoinList>
            </div>
            <WhyJoinImage>
              <Icon.RocketTakeoff />
            </WhyJoinImage>
          </WhyJoinContent>
        </div>
      </WhyJoinSection>

      {/* FINAL CTA */}
      {/* <FinalCTASection>
        <FinalCTAContent>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join Molsys and work on cutting-edge AI and genomics projects.
            Limited spots available!
          </p>
          <Button primary onClick={() => setIsModalOpen(true)}>
            Apply for Internship →
          </Button>
        </FinalCTAContent>
      </FinalCTASection>

      {/* APPLY MODAL */}
      {/* <ModalOverlay isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseBtn onClick={() => setIsModalOpen(false)}>&times;</CloseBtn>

          <h2
            style={{
              color: "#1f2937",
              marginBottom: "30px",
              marginTop: "35px",
            }}
          >
            Apply For Internship
          </h2>

          <form onSubmit={handleSubmit}>
            {/* PERSONAL INFO */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Personal Information
            </h3>

            <FormGroup>
              <Label>
                Full Name <span className="required">*</span>
              </Label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Email <span className="required">*</span>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>
                Phone <span className="required">*</span>
              </Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="City, Country"
              />
            </FormGroup>

            {/* EDUCATION */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Education
            </h3>

            <FormGroup>
              <Label>Degree</Label>
              <Input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleInputChange}
                placeholder="e.g., B.Tech, B.E, B.Sc, B.A"
              />
            </FormGroup>

            <FormGroup>
              <Label>Field of Study</Label>
              <Input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleInputChange}
                placeholder="e.g., Computer Science, Bioinformatics"
              />
            </FormGroup>

            <FormGroup>
              <Label>University/College</Label>
              <Input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="Your university name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Graduation Year</Label>
              <Input
                type="number"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                placeholder="2024"
              />
            </FormGroup>

            {/* ROLE */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Role Selection
            </h3>

            <FormGroup>
              <Label>
                Apply For <span className="required">*</span>
              </Label>
              <Select
                name="roleApplying"
                value={formData.roleApplying}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a role</option>
                <option value="genome-informatics">
                  Genome-informatics Intern
                </option>
                <option value="ai-ml">AI/ML Intern</option>
                <option value="frontend">Frontend Developer Intern</option>
                <option value="backend">Backend Developer Intern</option>
              </Select>
            </FormGroup>

            {/* SKILLS */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Skills & Experience
            </h3>

            <FormGroup>
              <Label>Technical Skills (comma separated)</Label>
              <TextArea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g., Python, Machine Learning, React"
              />
            </FormGroup>

            <FormGroup>
              <Label>Programming Languages</Label>
              <TextArea
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                placeholder="e.g., Python, JavaScript, Java"
              />
            </FormGroup>

            <FormGroup>
              <Label>Tools & Technologies</Label>
              <TextArea
                name="tools"
                value={formData.tools}
                onChange={handleInputChange}
                placeholder="e.g., Git, Docker, Kubernetes"
              />
            </FormGroup>

            {/* EXPERIENCE */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Projects & Experience
            </h3>

            <FormGroup>
              <Label>Project Experience (describe briefly)</Label>
              <TextArea
                name="projects"
                value={formData.projects}
                onChange={handleInputChange}
                placeholder="Describe any relevant projects you've worked on..."
              />
            </FormGroup>

            <FormGroup>
              <Label>GitHub Profile Link</Label>
              <Input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder="https://github.com/yourprofile"
              />
            </FormGroup>

            {/* RESUME */}
            {/* <h3
              style={{
                color: "#1f2937",
                fontSize: "1.1rem",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Documents
            </h3>

            <FormGroup>
              <Label>Upload Resume (PDF)</Label>
              <Input
                type="file"
                name="resume"
                onChange={handleInputChange}
                accept=".pdf"
              />
            </FormGroup>

            {/* DECLARATION */}
            {/* <CheckboxLabel>
              <input
                type="checkbox"
                name="isFresher"
                checked={formData.isFresher}
                onChange={handleInputChange}
                required
              />
              I confirm I am a fresher and eligible for this internship{" "}
              <span className="required">*</span>
            </CheckboxLabel>

            <SubmitBtn type="submit">Submit Application</SubmitBtn>
          </form>
        </ModalContent>
      </ModalOverlay> */}
    </CareersContainer>
  );
}

export default Careers;
