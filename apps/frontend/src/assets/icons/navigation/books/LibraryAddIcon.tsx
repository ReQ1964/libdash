const LibraryAddIcon = (): JSX.Element => {
  return (
    <svg
      height="23"
      viewBox="0 0 512 512"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="ci-primary"
        d="M48,464V144H16V472a24.027,24.027,0,0,0,24,24H368V464H48Z"
        fill="var(--ci-primary-color, #000000)"
      />
      <path
        className="ci-primary"
        d="M144,400H112V80H80V408a24.027,24.027,0,0,0,24,24H432V400H144Z"
        fill="var(--ci-primary-color, #000000)"
      />
      <path
        className="ci-primary"
        d="M472,16H168a24.027,24.027,0,0,0-24,24V344a24.027,24.027,0,0,0,24,24H472a24.027,24.027,0,0,0,24-24V40A24.027,24.027,0,0,0,472,16Zm-8,320H176V48H464Z"
        fill="var(--ci-primary-color, #000000)"
      />
      <polygon
        className="ci-primary"
        fill="var(--ci-primary-color, #000000)"
        points="304 288 336 288 336 204 420 204 420 172 336 172 336 88 304 88 304 172 220 172 220 204 304 204 304 288"
      />
    </svg>
  );
};

export default LibraryAddIcon;
