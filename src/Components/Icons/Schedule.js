export default function CategoryIcon({ height, width, status }) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.81 2.64062H16.191C19.28 2.64062 21 4.43505 21 7.50977V17.9235C21 21.0486 19.28 22.8027 16.191 22.8027H7.81C4.77 22.8027 3 21.0486 3 17.9235V7.50977C3 4.43505 4.77 2.64062 7.81 2.64062ZM8.08 7.3384V7.32831H11.069C11.5 7.32831 11.85 7.68115 11.85 8.11363C11.85 8.5582 11.5 8.91104 11.069 8.91104H8.08C7.649 8.91104 7.3 8.5582 7.3 8.12472C7.3 7.69123 7.649 7.3384 8.08 7.3384ZM8.07984 13.4684H15.9198C16.3498 13.4684 16.6998 13.1155 16.6998 12.6821C16.6998 12.2486 16.3498 11.8947 15.9198 11.8947H8.07984C7.64884 11.8947 7.29984 12.2486 7.29984 12.6821C7.29984 13.1155 7.64884 13.4684 8.07984 13.4684ZM8.08 18.0752H15.92C16.319 18.0349 16.62 17.6911 16.62 17.2889C16.62 16.8756 16.319 16.5328 15.92 16.4925H8.08C7.78 16.4623 7.49 16.6034 7.33 16.8655C7.17 17.1175 7.17 17.4502 7.33 17.7123C7.49 17.9643 7.78 18.1156 8.08 18.0752Z"
            fill={status ? "#6254FF" : "#39394B"}
          />
        </g>
      </svg>
    </>
  );
}
