export default function ArrowDown({
  width = "14px",
  height = "35px",
  color = "#FFF",
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path
          d="M7 1L7 34M7 34L13 28.3333M7 34L0.999999 28.3333"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}
