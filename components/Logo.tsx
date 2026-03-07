import React from 'react';

export const MainLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="200" fill="#2E8B57"/>
    <defs>
      <linearGradient id="gloss" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.2"/>
        <stop offset="0.5" stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="black" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="200" fill="url(#gloss)"/>
    <g transform="translate(162, 212)">
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="white"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="white"/>
      <rect x="347" y="60" width="6" height="480" rx="3" fill="#CBD5E1" opacity="0.5"/>
      <g transform="translate(325, 170)">
        <rect x="16" y="0" width="18" height="130" rx="9" fill="#059669" stroke="white" strokeWidth="4"/>
        <rect x="-15" y="35" width="80" height="18" rx="9" fill="#059669" stroke="white" strokeWidth="4"/>
        <rect x="16" y="0" width="18" height="130" rx="9" fill="#059669"/>
        <rect x="-15" y="35" width="80" height="18" rx="9" fill="#059669"/>
      </g>
      {/* Musical Note Icon on the right page */}
      <g transform="translate(450, 150) scale(4)">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="#2E8B57" opacity="0.8"/>
      </g>
    </g>
  </svg>
);
