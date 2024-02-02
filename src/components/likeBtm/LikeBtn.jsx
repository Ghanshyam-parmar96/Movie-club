import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const LikeBtn = ({ likedData }) => {
  const [like, setLike] = useState(false);
  const location = useLocation();
  
  const handleliked = () => {
    if (!localStorage.getItem("guest_id")){
      toast.warn("please login")
      return;
    } ;

    if (!like) {
      if (localStorage.getItem("likedDataList")) {
        const prevData = JSON.parse(localStorage.getItem("likedDataList"));
        if (prevData.length > 100 ) prevData.pop();
        localStorage.setItem(
          "likedDataList",
          JSON.stringify([likedData, ...prevData])
        );
        toast("💖 Liked");
        setLike(true);
      } else {
        localStorage.setItem("likedDataList", JSON.stringify([likedData]));
        toast("💖 Liked");
        setLike(true);
      }
    } else {
      if (localStorage.getItem("likedDataList")) {
        const prevData = JSON.parse(localStorage.getItem("likedDataList"));
        localStorage.setItem(
          "likedDataList",
          JSON.stringify(prevData.filter((item) => item.id !== likedData.id))
        );
        toast("💔 Unliked");
        setLike(false);
      } else {
        localStorage.setItem("likedDataList", JSON.stringify([]));
        toast("💔 Unliked");
        setLike(false);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("likedDataList")) {
      const prevData = JSON.parse(localStorage.getItem("likedDataList"));
      const isInclude = prevData.some((item) => item.id === likedData.id);
      isInclude ? setLike(true) : setLike(false);
    } else {
      setLike(false);
    }
  }, [location]);

  return (
    <button className="bg-gray-900 p-3 rounded-3xl" onClick={handleliked}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={like ? "#fff" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </button>
  );
};

export default LikeBtn;
