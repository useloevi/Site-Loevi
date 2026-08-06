import React from "react";

export default function MenuIcon({ size = 20, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="17" x2="20" y2="17" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
