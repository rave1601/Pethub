import React from 'react';

// Buddy Golden Retriever High-Fidelity SVG Portrait
export const BuddyAvatar = ({ size = 72, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ borderRadius: '50%', backgroundColor: '#FFE8D6' }}
  >
    {/* Background warm circle */}
    <circle cx="50" cy="50" r="48" fill="#FDE2CD" />
    
    {/* Golden Retriever Face */}
    {/* Ears */}
    <path d="M22 36C18 48 20 66 28 72C32 75 35 68 34 56C33 46 30 38 22 36Z" fill="#D9822B" />
    <path d="M78 36C82 48 80 66 72 72C68 75 65 68 66 56C67 46 70 38 78 36Z" fill="#D9822B" />
    
    {/* Head base */}
    <ellipse cx="50" cy="52" rx="28" ry="26" fill="#F4A24B" />
    {/* Forehead fluff */}
    <path d="M42 28C46 25 54 25 58 28C55 32 45 32 42 28Z" fill="#E8923A" />
    
    {/* Snout & Muzzle */}
    <ellipse cx="50" cy="62" rx="16" ry="14" fill="#FFE2C2" />
    <path d="M44 54C47 52 53 52 56 54C54 58 46 58 44 54Z" fill="#232D3F" />
    {/* Nose */}
    <path d="M46 56C48 54 52 54 54 56C53 60 47 60 46 56Z" fill="#1C1E24" />
    {/* Mouth smile line */}
    <path d="M50 59V63M45 63C47 66 53 66 55 63" stroke="#5A4032" strokeWidth="2" strokeLinecap="round" />
    {/* Tongue peek */}
    <path d="M48 64C48 67 52 67 52 64" fill="#E06D53" />

    {/* Eyes */}
    <circle cx="38" cy="46" r="3.5" fill="#2C1D11" />
    <circle cx="39" cy="45" r="1.2" fill="#FFFFFF" />
    <circle cx="62" cy="46" r="3.5" fill="#2C1D11" />
    <circle cx="63" cy="45" r="1.2" fill="#FFFFFF" />

    {/* Eyebrow warm highlights */}
    <ellipse cx="38" cy="40" rx="3" ry="1.5" fill="#FFE0B8" />
    <ellipse cx="62" cy="40" rx="3" ry="1.5" fill="#FFE0B8" />

    {/* Teal collar accent */}
    <path d="M34 76C42 82 58 82 66 76L68 82C58 88 42 88 32 82L34 76Z" fill="#2A8B88" />
    <circle cx="50" cy="82" r="3" fill="#E06D53" />
  </svg>
);

// Luna Cat Avatar
export const LunaAvatar = ({ size = 72, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ borderRadius: '50%', backgroundColor: '#EBF7F6' }}
  >
    <circle cx="50" cy="50" r="48" fill="#E0F2F1" />
    {/* Cat Ears */}
    <path d="M26 44L34 22L48 38Z" fill="#6D5545" />
    <path d="M31 38L36 26L44 36Z" fill="#FFC4B0" />
    <path d="M74 44L66 22L52 38Z" fill="#D97736" />
    <path d="M69 38L64 26L56 36Z" fill="#FFC4B0" />
    {/* Head */}
    <ellipse cx="50" cy="54" rx="26" ry="22" fill="#FFFFFF" />
    <path d="M60 40C72 44 76 58 74 68C66 68 62 58 60 40Z" fill="#D97736" />
    <path d="M26 50C24 64 34 68 40 68C36 58 32 46 26 50Z" fill="#6D5545" />
    {/* Eyes */}
    <ellipse cx="40" cy="52" rx="4" ry="5" fill="#2E9E66" />
    <ellipse cx="40" cy="52" rx="1.5" ry="4" fill="#1C1E24" />
    <circle cx="41" cy="50" r="1" fill="#FFFFFF" />
    <ellipse cx="60" cy="52" rx="4" ry="5" fill="#2E9E66" />
    <ellipse cx="60" cy="52" rx="1.5" ry="4" fill="#1C1E24" />
    <circle cx="61" cy="50" r="1" fill="#FFFFFF" />
    {/* Nose & whiskers */}
    <path d="M48 59L52 59L50 61Z" fill="#E06D53" />
    <path d="M34 58L22 57M34 62L20 64M66 58L78 57M66 62L80 64" stroke="#8E7869" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Sarah Jenkins Profile Avatar
export const SarahAvatar = ({ size = 36, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ borderRadius: '50%', backgroundColor: '#FFEADB' }}
  >
    <circle cx="50" cy="50" r="48" fill="#FFEADB" />
    {/* Hair back */}
    <circle cx="50" cy="46" rx="24" ry="24" fill="#5A3825" />
    {/* Face */}
    <ellipse cx="50" cy="50" rx="18" ry="20" fill="#FDD6BA" />
    {/* Hair front */}
    <path d="M30 44C32 30 68 30 70 44C66 40 54 36 50 38C46 36 34 40 30 44Z" fill="#5A3825" />
    {/* Smile */}
    <path d="M46 56C48 58 52 58 54 56" stroke="#C26A45" strokeWidth="2" strokeLinecap="round" />
    {/* Eyes */}
    <circle cx="43" cy="48" r="2.5" fill="#2A3B4C" />
    <circle cx="57" cy="48" r="2.5" fill="#2A3B4C" />
    {/* Shoulders */}
    <path d="M24 88C28 72 72 72 76 88" fill="#2A8B88" />
  </svg>
);

// Little Paws Leaf Divider SVG
export const LeafDivider = () => (
  <div className="sidebar-leaf-divider">
    <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7C11 2 5 4 2 7C5 10 11 12 16 7Z" fill="#2A8B88" opacity="0.8" />
      <path d="M16 7C21 2 27 4 30 7C27 10 21 12 16 7Z" fill="#2A8B88" opacity="0.8" />
      <circle cx="16" cy="7" r="1.5" fill="#6D5545" />
    </svg>
  </div>
);
