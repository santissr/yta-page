interface MapsSvgI {
  size?: string;
  color?: string;
}

export const MapsSvg = ({ size = "24", color = "#EBE02A" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 9.00002V15C22 17.5 21.5 19.25 20.38 20.38L14 14L21.73 6.27002C21.91 7.06002 22 7.96002 22 9.00002Z"
        fill="white"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.73 6.27L6.27 21.73C3.26 21.04 2 18.96 2 15V9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27Z"
        fill={color}
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.38 20.38C19.25 21.5 17.5 22 15 22H9.00002C7.96002 22 7.06002 21.91 6.27002 21.73L14 14L20.38 20.38Z"
        fill="white"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.24002 7.97997C6.92002 5.04997 11.32 5.04997 12 7.97997C12.39 9.69997 11.31 11.16 10.36 12.06C10.0255 12.3779 9.58156 12.5552 9.12002 12.5552C8.65848 12.5552 8.21457 12.3779 7.88002 12.06C6.93002 11.16 5.84002 9.69997 6.24002 7.97997Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M9.09497 8.69995H9.10397"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
