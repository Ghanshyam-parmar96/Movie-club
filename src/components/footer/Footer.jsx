import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
const Footer = () => {
  return (
    <footer className="text-white bg-[#1d1d1d] relative px-0 pb-5">
      <div className="w-11/12 mx-auto flex items-center flex-col">
        <ul className="list-none flex items-center justify-center gap-4 md:gap-7 mb-5 md:mb-7">
          <li className="transition-all hover:text-pink-500 text-xs md:text-base ">
            Terms Of Use
          </li>
          <li className="transition-all hover:text-pink-500 text-xs md:text-base ">
            Privacy-Policy
          </li>
          <li className="transition-all hover:text-pink-500 text-xs md:text-base ">
            About
          </li>
          <li className="transition-all hover:text-pink-500 text-xs md:text-base ">
            Blog
          </li>
          <li className="transition-all hover:text-pink-500 text-xs md:text-base ">
            FAQ
          </li>
        </ul>
        <div className="text-xs leading-5 opacity-50 text-center max-w-4xl md:text-sm mb-5 md:mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <FacebookShareButton url="https://movie-club-gp.vercel.app/"
            title="Movie-club - Explore  latest Movie and TV Shows">
            <span className="w-12 h-12 bg-black flex items-center justify-center cursor-pointer transition-shadow rounded-3xl hover:shadow-[0_0_0.625em_white] hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </span>
          </FacebookShareButton>
          <TelegramShareButton
            url="https://movie-club-gp.vercel.app/"
            title="Movie-club - Explore latest Movie and TV Shows"
          >
            <span className="w-12 h-12 bg-black flex items-center justify-center cursor-pointer transition-shadow rounded-3xl hover:shadow-[0_0_0.625em_white] hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="#fff"
                viewBox="0 0 24 24"
              >
                <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
              </svg>
            </span>
          </TelegramShareButton>
          <TwitterShareButton
            url="https://movie-club-gp.vercel.app/"
            title="Movie-club - Explore  latest Movie and TV Shows"
          >
            <span className="w-12 h-12 bg-black flex items-center justify-center cursor-pointer transition-shadow rounded-3xl hover:shadow-[0_0_0.625em_white] hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </span>
          </TwitterShareButton>
          <LinkedinShareButton url="https://movie-club-gp.vercel.app/"
            title="Movie-club - Explore  latest Movie and TV Shows">
            <span className="w-12 h-12 bg-black flex items-center justify-center cursor-pointer transition-shadow rounded-3xl hover:shadow-[0_0_0.625em_white] hover:text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </span>
          </LinkedinShareButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
