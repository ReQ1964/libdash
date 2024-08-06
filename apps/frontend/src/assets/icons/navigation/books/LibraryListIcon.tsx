import React from 'react';

const LibraryListIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="var(--ci-primary-color, #000000)"
        d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
        className="ci-primary"
      />
      <path
        fill="var(--ci-primary-color, #000000)"
        d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"
        className="ci-primary"
      />
      <path
        fill="var(--ci-primary-color, #000000)"
        d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"
        className="ci-primary"
      />
    </svg>
  );
};

export default LibraryListIcon;
