export default function Mail({
  width = "26",
  height = "24",
  color = "white",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className}
    >
      <path
        d="M4.8443 4H21.0127C22.1243 4 23.0338 4.9 23.0338 6V18C23.0338 19.1 22.1243 20 21.0127 20H4.8443C3.73272 20 2.82324 19.1 2.82324 18V6C2.82324 4.9 3.73272 4 4.8443 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0338 6L12.9285 13L2.82324 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
