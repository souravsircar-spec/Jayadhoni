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
      {/* Shadow pages */}
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      
      {/* Main pages */}
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="white"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="white"/>
      
      {/* Spine */}
      <rect x="347" y="60" width="6" height="480" rx="3" fill="#CBD5E1" opacity="0.5"/>
      
      {/* Cross on the left page */}
      <g transform="translate(140, 150) scale(1.8)">
        <rect x="16" y="0" width="14" height="100" rx="4" fill="#059669" />
        <rect x="-15" y="25" width="76" height="14" rx="4" fill="#059669" />
      </g>

      {/* Treble Clef on the right page */}
      <g transform="translate(480, 100) scale(4.5)">
        <path 
          d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm0-16c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7zm0 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" 
          fill="#059669" 
          opacity="0.2"
        />
        <path 
          d="M9.5 17.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM12 2c-1.1 0-2 .9-2 2v11.17c-.61-.36-1.3-.57-2-.57-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V6h4v4h2V4c0-1.1-.9-2-2-2z" 
          fill="#059669"
        />
      </g>
    </g>
  </svg>
);
