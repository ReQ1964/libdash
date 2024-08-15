const LibraryListIcon = (): JSX.Element => {
  return (
    <svg
      height="23"
      viewBox="0 0 512 512"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="ci-primary"
        d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
        fill="var(--ci-primary-color, #000000)"
      />
      <path
        className="ci-primary"
        d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"
        fill="var(--ci-primary-color, #000000)"
      />
      <path
        className="ci-primary"
        d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"
        fill="var(--ci-primary-color, #000000)"
      />
    </svg>
  );
};

export default LibraryListIcon;
