import React from "react";
import { useDispatch } from "react-redux";
import { show_me } from "../../../../store/exploreSlice";

const ShowMe = () => {
  const dispatch = useDispatch();

  const handleRadio = (event) => {
    if (event.target.name === undefined) return;
    dispatch(show_me(Number(event.target.value)));
  };

  return (
    <div className="m-2 px-1">
      <form onClick={handleRadio}>
        <h3 className="font-bold text-base text-[#ab0000]">Show Me</h3>
        <div className="my-1">
          <input
            type="radio"
            id="show_me_everything"
            name="show_me"
            value="0"
            className="ml-3"
            defaultChecked
          />
          <label
            htmlFor="show_me_everything"
            className="ml-2 text-sm font-normal"
          >
            Everything
          </label>
        </div>
        <div className="my-1">
          <input
            type="radio"
            id="show_me_not_seen"
            name="show_me"
            value="1"
            className="ml-3"
          />
          <label
            htmlFor="show_me_not_seen"
            className="ml-2 text-sm font-normal"
          >
            TV Show I Haven't Seen
          </label>
        </div>
        <div className="my-1">
          <input
            type="radio"
            id="show_me_seen"
            name="show_me"
            value="2"
            className="ml-3"
          />
          <label htmlFor="show_me_seen" className="ml-2 text-sm font-normal">
            TV Show I Have Seen
          </label>
        </div>
      </form>
    </div>
  );
};

export default ShowMe;
