interface IconProps {
  className: string;
}

const ChevronDownIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      className={className}
      fill="none"
      height="22"
      viewBox="0 0 24 24"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronDownIcon;
