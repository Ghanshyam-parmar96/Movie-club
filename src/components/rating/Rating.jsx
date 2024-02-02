
const Rating = ({ progress, Size, fontSize }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const colorChange = progress < 30 ? "#e70000" : progress < 60 ? "#f1de4b" : "#3cbf1d";

  return (
    <div className={`flex items-center rounded-full justify-center w-12 h-12 bg-gray-900/70 relative`}
    style={{height: Size + "px", width : Size + "px"}}
    >
    <>
    <svg
      className="w-full h-full transform rotate-180 "
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        strokeWidth="4"
        stroke="#333"
      />
      <circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        strokeWidth="4"
        stroke={colorChange}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(90 32 32)"
      />
    </svg>
    <div className="absolute h-2/4 w-2/4 flex items-center justify-center">
    <span className={`text-base font-medium text-white`}
      style={{fontSize : fontSize + "px"}}
    >
      {progress}
    </span>
    {/* <span className="pt-1 text-[#b7b7b7] text-xs ">/10</span> */}
    </div>
    </>
  </div>
  );
};

export default Rating;
