export const LogoSmall = ({ color }: { color: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 28"
      height="34"
      fill={color}
    >
      <circle className="logo-white" cx="14.1" cy="14.1" r="12.6"></circle>
      <circle className="logo-default" cx="14.1" cy="14.1" r="11.4"></circle>
      <path
        fill={color === "#FA0E6A" ? "#FFF" : "#FA0E6A"}
        className="logo-white"
        d="M6.3 12.7c-0.2-0.2-0.2-0.6 0-0.8l4.4-4.1c0.2-0.2 0.6-0.2 0.8 0l1 1.1c0.2 0.2 0.2 0.6 0 0.8L8 13.8c-0.2 0.2-0.6 0.2-0.8 0L6.3 12.7z"
      ></path>
      <path
        fill={color === "#FA0E6A" ? "#FFF" : "#FA0E6A"}
        className="logo-white"
        d="M7.9 17.7c0.4-0.4 1.1-0.4 1.5 0.2 1.1 1.4 2.8 2.2 4.7 2.2s3.5-0.9 4.6-2.2c0.5-0.6 1.1-0.5 1.5-0.1 0.4 0.3 0.8 0.6 0.2 1.5 -1.4 1.9-3.8 3-6.3 3 -2.6 0-4.9-1.1-6.3-3C7.1 18.3 7.5 18.1 7.9 17.7z"
      ></path>
      <path
        fill={color === "#FA0E6A" ? "#FFF" : "#FA0E6A"}
        className="logo-white"
        d="M21.9 12.7c0.2-0.2 0.2-0.6 0-0.8l-4.4-4.1c-0.2-0.2-0.6-0.2-0.8 0l-1 1.1c-0.2 0.2-0.2 0.6 0 0.8l4.4 4.1c0.2 0.2 0.6 0.2 0.8 0L21.9 12.7z"
      ></path>
    </svg>
  );
};
