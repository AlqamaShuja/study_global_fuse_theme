import React from "react";

interface StudyGlobalLogoProps {
  // No props needed for static SVG, but interface is included for extensibility
}

const StudyGlobalLogo: React.FC<StudyGlobalLogoProps> = () => {
  return (
    <svg
      width="280"
      height="80"
      viewBox="0 0 280 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe Icon */}
      <circle
        cx="40"
        cy="40"
        r="28"
        fill="url(#grad1)"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M12 40 Q40 15 68 40 Q40 65 12 40"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <path
        d="M40 12 Q65 40 40 68 Q15 40 40 12"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      <circle cx="40" cy="40" r="3" fill="#ffffff" />
      <path
        d="M20 25 Q40 30 60 25 M20 55 Q40 50 60 55"
        stroke="#ffffff"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Text */}
      <text
        x="85"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#1e40af"
      >
        STUDY
      </text>
      <text
        x="85"
        y="58"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="#3b82f6"
      >
        GLOBAL
      </text>

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#2563eb", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StudyGlobalLogo;