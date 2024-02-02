import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const RatingModel = ({ mediaType, id }) => {
  const [isRated, setIsRated] = useState(false);
  const [rating, setRating] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const location = useLocation();

  const handleShowRating = () => {
    let flag;
    const clearTime = clearTimeout(flag);
    setTimeout(() => {
      setShowRating(false);
    }, 2000);
  }
  const handleClick = async (value) => {
    if (!localStorage.getItem("guest_id")) {
      toast.warn("please login");
      return;
    }

    if (localStorage.getItem("ratingList")) {
      const prevData = JSON.parse(localStorage.getItem("ratingList"));
      localStorage.setItem("ratingList", JSON.stringify({...prevData, [mediaType] : [ id, ...prevData[mediaType]]}));
      toast.success("Your Rating has been Saved");
      handleShowRating();
      setIsRated(true);
    } else {
      localStorage.setItem(
        "ratingList",
        JSON.stringify({ movie: [], tv: [], [mediaType]: [id] })
      );
      toast.success("Your Rating has been Saved");
      handleShowRating();
      setIsRated(true);
    }

    setRating(value);
    const addRating = fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}/rating?guest_session_id=${
        JSON.parse(localStorage.getItem("guest_id"))?.guest_session_id
      }&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          accept: "application/json",
        },
        body: JSON.stringify({ value: value * 2 }),
      }
    );
  };

  const handleReset = () => {
    if (!localStorage.getItem("guest_id")) {
      toast.warn("please login");
      return;
    }

    if (localStorage.getItem("ratingList")) {
      const prevData = JSON.parse(localStorage.getItem("ratingList"));
      localStorage.setItem(
        "ratingList",
        JSON.stringify({...prevData, [mediaType] : prevData[mediaType].filter((item) => item !== id)})
      );
      toast.success("Remove Rating");
      handleShowRating();
      setIsRated(false);
    } else {
      localStorage.setItem("ratingList", JSON.stringify({movie : [], tv : [] }));
      handleShowRating();
      setIsRated(false);
    }

    setRating(0);
    const removeRating = fetch(
      `https://api.themoviedb.org/3/${mediaType}/${id}/rating?guest_session_id=${
        JSON.parse(localStorage.getItem("guest_id"))?.guest_session_id
      }&api_key=${import.meta.env.VITE_API_KEY}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          accept: "application/json",
        }
      }
    );
  };

  useEffect(() => {
    if (localStorage.getItem("ratingList")) {
      const prevData = JSON.parse(localStorage.getItem("ratingList"));
      const isInclude = prevData[mediaType].some((item) => item === id);
      isInclude ? setIsRated(true) : setIsRated(false);
    } else {
      setIsRated(false);
    }
  }, [location]);

  const starStyle = {
    cursor: "pointer",
    height: "32px",
    width: "32px",
    fill: "#FFDA55",
    stroke: "#ffda55",
    strokeWidth: "1px",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <div className="relative">
      <button
        title="add Rating"
        className="bg-gray-900 p-3 rounded-3xl"
        onClick={() => {
          setShowRating((prev) => !prev);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={isRated ? "#ffda55" : "#fff"}
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {showRating && (
        <div className="bg-gray-800 px-6 rounded-xl py-4 z-20 absolute top-1/2 left-14 -translate-y-1/2  ">
          <span
            className="justify-end flex  w-full"
            onClick={() => setShowRating(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;

              return (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  style={starStyle}
                  onClick={() => handleClick(ratingValue)}
                >
                  <path
                    d="M12 2L8 8l-6 1.5 4.5 4.5L5 20l7-3 7 3-1.5-6.5 4.5-4.5L16 8l-4-6z"
                    fillOpacity={ratingValue <= rating ? 1 : 0}
                  />
                </svg>
              );
            })}
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingModel;
