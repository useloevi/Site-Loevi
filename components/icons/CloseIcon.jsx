import React from "react";

export default function CloseIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
