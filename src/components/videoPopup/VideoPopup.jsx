import React from "react";
import ReactPlayer from "react-player/youtube";


const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`flex justify-center items-center w-full h-full fixed  z-50 left-0 top-0 ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`absolute w-full h-full backdrop-blur-[3.5px]  transition-opacity bg-black/25 left-0 top-0 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={hidePopup}
      ></div>
      <div
        className={`relative w-[800px] aspect-video bg-white transition-transform duration-[250ms]  ${
          show ? "scale-100" : "scale-[0.2]"
        }`}
      >
        <span
          className="absolute text-white cursor-pointer right-1 -top-10"
          onClick={hidePopup}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
