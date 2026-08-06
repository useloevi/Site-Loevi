import React from "react";

export default function NecklaceIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 4c0 6 3.5 10 8 10s8-4 8-10"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="3" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}
