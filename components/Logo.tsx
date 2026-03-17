import React from 'react';

export const MainLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background Squircle */}
    <path d="M512 0C128 0 0 128 0 512s128 512 512 512 512-128 512-512S896 0 512 0z" fill="#358C5D"/>
    
    <g transform="translate(162, 212)">
      {/* Previous Bible Shape */}
      {/* Shadow pages */}
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      
      {/* Main pages */}
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="white"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="white"/>
      
      {/* Spine */}
      <rect x="347" y="60" width="6" height="480" rx="3" fill="#CBD5E1" opacity="0.5"/>

      {/* Cross on the left page */}
      <g transform="translate(110, 63)">
        <rect x="78" y="0" width="42" height="265" fill="#358C5D"/>
        <rect x="0" y="65" width="198" height="42" fill="#358C5D"/>
      </g>
      
      {/* Lines and Musical Note on the right page */}
      <g transform="translate(378, 228)">
        <rect width="140" height="22" rx="11" fill="#3C4E5E"/>
        <rect y="38" width="140" height="22" rx="11" fill="#3C4E5E"/>
        <rect y="76" width="80" height="22" rx="11" fill="#3C4E5E"/>
      </g>
      
      <g transform="translate(463, 223)">
        <rect x="70" y="0" width="18" height="180" rx="9" fill="#4CAF50"/>
        <path d="M79 9 C130 9 150 60 150 120 C150 140 140 155 130 160" stroke="#4CAF50" strokeWidth="18" strokeLinecap="round" fill="none"/>
        <g transform="translate(45, 180)">
          <circle cx="0" cy="0" r="45" fill="#4CAF50"/>
          <path d="M0 -45 A45 45 0 0 0 0 45 Z" fill="#2D8A5B"/>
        </g>
      </g>
    </g>
  </svg>
);
