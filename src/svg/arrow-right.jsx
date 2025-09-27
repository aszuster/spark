export default function Logo({
  width = "14px",
  height = "14px",
  stroke = "#262535",
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
        d="M1 7H13M13 7L7.33333 1M13 7L7.33333 13"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
