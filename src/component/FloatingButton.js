import React from "react";
import { useHistory } from "react-router-dom";

const FloatingButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/WorkshopRegistration");
  };

  return (
    <>
      <style>
        {`
          .floating-button {
            position: fixed;
            bottom: 50px;
            right: 50px;
            background: linear-gradient(135deg, #5A4FFF, #3D8BFD);
            color: white;
            border: none;
            border-radius: 30px;
            padding: 18px 28px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            z-index: 9999;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
            animation: clickEffect 2.5s infinite ease-in-out;
            transform-origin: center;
            transition: transform 0.2s;
          }

          .floating-button:hover {
            transform: scale(1.05);
          }

          @keyframes clickEffect {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
            }
            20% {
              transform: scale(0.95);
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            }
            40% {
              transform: scale(1.03);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            }
            60% {
              transform: scale(0.97);
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            }
            80% {
              transform: scale(1.02);
              box-shadow: 0 9px 18px rgba(0, 0, 0, 0.25);
            }
          }
        `}
      </style>

      <button className="floating-button" onClick={handleClick}>
        Apply for Workshops
      </button>
    </>
  );
};

export default FloatingButton;
