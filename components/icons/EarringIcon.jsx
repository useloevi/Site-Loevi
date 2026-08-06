import React from "react";

export default function EarringIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="2.4" stroke={color} strokeWidth="1.6" />
      <path
        d="M12 8.4V13a4 4 0 1 0 4 4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
