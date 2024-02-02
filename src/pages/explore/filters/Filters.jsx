import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShowMe from "./showMe/ShowMe";
import Availabilities from "./availabilities/Availabilities";
import AirDate from "./airDate/AirDate";
import Genres from "./genres/Genres";
import Languages from "./languages/Languages";
import MultiSelector from "./multiSelector/MultiSelector";
import UserScore from "./userScore/UserScore";
import Certification from "./certification/Certification";
import Runtime from "./runtime/Runtime";
import MinUserVotes from "./minUserVotes/MInUserVotes";

const Filters = () => {
  const [show, setShow] = useState(true);
  const { mediaType } = useParams();

  return (
    <div>
      <div
        className="flex items-center justify-between p-2 w-full"
        onClick={() => setShow(!show)}
      >
        <h3 className=" font-bold text-base flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filter</span>
        </h3>
        <span className="cursor-pointer">
        {show ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </span>
      </div>
      <div
        style={{ display: show ? "block" : "none" }}
      >
        {/* radio input handle */}
        <ShowMe />

        {/* hamdle checked box */}
        <Availabilities />

        {/* Air date section */}
        <AirDate mediaType={mediaType} />

        {/* Genres */}
        <Genres mediaType={mediaType} />

        {/* Certification */}
        { mediaType === 'movie' && <Certification mediaType={mediaType} />}
        
        
        {/* Language */}
        <Languages />

        {/* User Score */}
        <UserScore />
        
        {/* min User Votes */}
        <MinUserVotes/>

        {/* Runtime */}
        <Runtime />

        {/* keywords */}
        <MultiSelector name="Keywords" />
      </div>
    </div>
  );
};

export default Filters;
