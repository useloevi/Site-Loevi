import React from "react";

export default function InstagramIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke={color}
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4.4" stroke={color} strokeWidth="1.6" />
      <circle cx="17.35" cy="6.65" r="1.15" fill={color} />
    </svg>
  );
}
