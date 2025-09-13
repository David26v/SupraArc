import React from "react";

const Logo = () => {
  return (
    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        {/* MAIN ARCH — Larger, bolder, centered */}
        <path
          d="M5 19 C8 11, 16 11, 19 19"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* DIGITAL WAVE — Expanded to fill the arch */}
        <path
          d="M7 16 C10 10, 14 10, 17 16"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* SUBTLE UPWARD ENERGY — Simplified upward pulse */}
        <path
          d="M12 16 L12 8"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* DIGITAL DOT SIGNALS — Now slightly larger and more visible */}
        <circle cx="9" cy="15" r="0.8" fill="currentColor" opacity="0.9" />
        <circle cx="15" cy="15" r="0.8" fill="currentColor" opacity="0.9" />
      </svg>
    </div>
  );
};

export default Logo;
