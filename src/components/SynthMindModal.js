import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import bootcampVideo from "../assets/IMG_1153.mp4";

const SynthMindModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Check if user has chosen "don't show again" today
    const lastDismissed = localStorage.getItem("synthMindModalDismissed");
    const today = new Date().toDateString();

    console.log("SynthMind Modal: Checking if should show...");
    console.log("Last dismissed:", lastDismissed);
    console.log("Today:", today);

    if (lastDismissed !== today) {
      // Show modal after 1 second delay for better UX
      console.log("SynthMind Modal: Will show after 1 second");
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        console.log("SynthMind Modal: Now showing!");
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      console.log("SynthMind Modal: User dismissed today, not showing");
    }
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
    if (dontShowAgain) {
      const today = new Date().toDateString();
      localStorage.setItem("synthMindModalDismissed", today);
    }
  };

  const handleRegister = () => {
    history.push("/Omicsworkshop");
  };

  const handleFloatingButtonClick = () => {
    setIsModalOpen(true);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Debug: Log modal state
  console.log("SynthMind Modal Render - isModalOpen:", isModalOpen);

  // Modal content (will be rendered in portal)
  const modalContent = (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeIn 0.3s ease-in-out",
            overflow: "auto",
          }}
        >
          {/* Transparent Backdrop - Home page visible behind */}
          <div
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 1,
            }}
          />

          {/* Modal Content - Creamy Background */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#FFF8F0",
              borderRadius: "24px",
              boxShadow: "0 25px 50px -12px rgba(102, 126, 234, 0.4)",
              maxWidth: "1000px",
              width: "95%",
              maxHeight: "95vh",
              overflow: "auto",
              animation: "slideUp 0.4s ease-out",
              padding: "0",
              zIndex: 10,
              border: "2px solid rgba(102, 126, 234, 0.2)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="synthMindCloseBtn"
              aria-label="Close modal"
              style={{
                position: "absolute",
                top: window.innerWidth <= 768 ? "12px" : "20px",
                right: window.innerWidth <= 768 ? "12px" : "20px",
                backgroundColor: "#667eea",
                border: "none",
                borderRadius: "50%",
                width: window.innerWidth <= 768 ? "40px" : "48px",
                height: window.innerWidth <= 768 ? "40px" : "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 100,
                transition: "all 0.3s ease",
                color: "white",
                fontSize: window.innerWidth <= 768 ? "24px" : "28px",
                fontWeight: "bold",
                lineHeight: "1",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#764ba2";
                e.target.style.transform = window.innerWidth > 768 ? "scale(1.1) rotate(90deg)" : "scale(1.05)";
                e.target.style.boxShadow = "0 6px 20px rgba(118, 75, 162, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "scale(1) rotate(0deg)";
                e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
              }}
            >
              ×
            </button>

            {/* Content Container */}
            <div
              style={{
                padding: "clamp(20px, 4vw, 40px)",
                paddingTop: "clamp(30px, 6vw, 60px)",
              }}
            >
              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(24px, 5vw, 36px)",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textAlign: "center",
                  marginBottom: "12px",
                  lineHeight: "1.2",
                }}
              >
                Master AI, Biology & Agentic Workflows
              </h1>

              {/* Sub Heading */}
              <p
                style={{
                  fontSize: "clamp(16px, 3vw, 20px)",
                  color: "#4a5568",
                  textAlign: "center",
                  marginBottom: "32px",
                  fontWeight: "500",
                }}
              >
                Build an Industry-Ready Portfolio in Just 3 Days
              </p>

              {/* Video Container with 3D Frame */}
              <div
                className="synthMindVideoContainer"
                style={{
                  position: "relative",
                  width: "100%",
                  height: window.innerWidth > 768 ? "500px" : "400px",
                  margin: "0 auto",
                  borderRadius: "clamp(12px, 3vw, 20px)",
                  overflow: "hidden",
                  boxShadow:
                    "0 20px 40px -10px rgba(102, 126, 234, 0.5), inset 0 0 0 6px rgba(102, 126, 234, 0.15)",
                  background: "#000",
                  marginBottom: "clamp(20px, 4vw, 40px)",
                  transform: window.innerWidth > 768 ? "perspective(1200px) rotateX(1deg)" : "none",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform =
                      "perspective(1200px) rotateX(0deg) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 30px 60px -10px rgba(102, 126, 234, 0.6), inset 0 0 0 6px rgba(102, 126, 234, 0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    e.currentTarget.style.transform =
                      "perspective(1200px) rotateX(1deg) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px -10px rgba(102, 126, 234, 0.5), inset 0 0 0 6px rgba(102, 126, 234, 0.15)";
                  }
                }}
              >
                {/* Loading Placeholder */}
                {!isVideoLoaded && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "600",
                      gap: "12px",
                    }}
                  >
                    <div className="spinner" style={{
                      border: "4px solid rgba(255,255,255,0.3)",
                      borderTop: "4px solid white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      animation: "spin 1s linear infinite",
                    }}></div>
                    <div>Loading video...</div>
                  </div>
                )}

                {/* Video Player */}
                <video
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onCanPlay={() => setIsVideoLoaded(true)}
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23667eea' width='100' height='100'/%3E%3C/svg%3E"
                >
                  <source src={bootcampVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Register CTA Button */}
              <button
                onClick={handleRegister}
                style={{
                  width: "100%",
                  padding: "18px 32px",
                  fontSize: "clamp(16px, 3vw, 20px)",
                  fontWeight: "700",
                  color: "white",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 25px -5px rgba(102, 126, 234, 0.5)",
                  marginBottom: "24px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 15px 30px -5px rgba(102, 126, 234, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 25px -5px rgba(102, 126, 234, 0.5)";
                }}
              >
                🎓 Register Now - Limited Seats!
              </button>

              {/* Don't Show Again Checkbox */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <input
                  type="checkbox"
                  id="dontShowAgain"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                />
                <label
                  htmlFor="dontShowAgain"
                  style={{
                    fontSize: "14px",
                    color: "#718096",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  Don't show this again today
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isModalOpen && (
        <button
          onClick={handleFloatingButtonClick}
          className="synthMindFloatingBtn"
          style={{
            position: "fixed",
            bottom: window.innerWidth <= 768 ? "16px" : "24px",
            right: window.innerWidth <= 768 ? "16px" : "24px",
            backgroundColor: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "50px",
            padding: window.innerWidth <= 768 ? "12px 20px" : "16px 24px",
            fontSize: window.innerWidth <= 768 ? "14px" : "16px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 10px 25px -5px rgba(102, 126, 234, 0.6)",
            zIndex: 9998,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "all 0.3s ease",
            animation: "pulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 15px 35px -5px rgba(102, 126, 234, 0.7)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 10px 25px -5px rgba(102, 126, 234, 0.6)";
          }}
        >
          <span style={{ fontSize: "20px" }}>🚀</span>
          <span>Register for Bootcamp</span>
        </button>
      )}

      {/* CSS Animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
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

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 10px 25px -5px rgba(102, 126, 234, 0.6);
            }
            50% {
              box-shadow: 0 10px 35px -5px rgba(102, 126, 234, 0.8);
            }
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .synthMindModal {
              padding: 16px !important;
            }

            /* Fit video on mobile screen */
            .synthMindVideoContainer {
              height: 400px !important;
              width: 100% !important;
              transform: none !important;
            }

            /* Smaller close button on mobile */
            .synthMindCloseBtn {
              width: 40px !important;
              height: 40px !important;
              font-size: 24px !important;
              top: 12px !important;
              right: 12px !important;
            }

            /* Smaller floating button on mobile */
            .synthMindFloatingBtn {
              bottom: 16px !important;
              right: 16px !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
            }

            .synthMindFloatingBtn span:first-child {
              font-size: 18px !important;
            }
          }

          /* Tablet adjustments */
          @media (min-width: 769px) and (max-width: 1024px) {
            .synthMindVideoContainer {
              height: 450px !important;
            }
          }

          /* Smooth scrolling for modal content */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: #667eea;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #764ba2;
          }
        `}
      </style>
    </>
  );

  // Use React Portal to render modal at document root level (outside all parent containers)
  return ReactDOM.createPortal(
    modalContent,
    document.body
  );
};

export default SynthMindModal;
