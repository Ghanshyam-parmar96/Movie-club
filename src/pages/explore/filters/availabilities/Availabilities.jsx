import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { monetization_types } from "../../../../store/exploreSlice";

const Availabilities = () => {
  const [showChecked, setShowChecked] = useState(true);
  const [monetizationType, setMonetizationType] = useState([
    "flatrate",
    "free",
    "ads",
    "rent",
    "buy",
  ]);

  const dispatch = useDispatch();

  const handleChecked = (e) => {
    if (e.target.name === undefined) return;
    if (showChecked) return;

    if (e.target.checked) {
      setMonetizationType((prev) => [...prev, e.target.value]);
    } else {
      setMonetizationType(
        monetizationType.filter((item) => item !== e.target.value)
      );
    }
  };

  const toggleChecked = (e) => {
    e.target.checked ? setShowChecked(true) : setShowChecked(false);
  };

  useEffect(() => {
    if (!showChecked) {
      const searchData = monetizationType.join("|");
      dispatch(monetization_types(searchData));
    } else {
      dispatch(monetization_types(""));
    }
  }, [toggleChecked, handleChecked]);

  // Availabilities checked

  return (
    <div className="relative px-3 mt-4 ">
      <h3 className="font-bold text-base text-[#ab0000]">Availabilities</h3>
      <div className="mt-2 ml-3">
        <input
          type="checkbox"
          id="Search_all_availabilities"
          name="Search_all_availabilities"
          value="all"
          onClick={toggleChecked}
          defaultChecked
        />
        <label
          htmlFor="Search_all_availabilities"
          className="ml-2 text-sm tracking-wide font-poppins font-medium"
        >
          Search all availabilities?
        </label>
      </div>
      <form onClick={handleChecked}>
        <div className={`ml-3 ${showChecked ? "hidden" : "block"}`}>
          <div>
            <input
              type="checkbox"
              id="Stream"
              name="ott_monetization_types"
              value="flatrate"
              defaultChecked
            />
            <label
              htmlFor="Stream"
              className="ml-2 text-sm font-medium select-none"
            >
              Stream
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Free"
              name="ott_monetization_types"
              value="free"
              defaultChecked
            />
            <label
              htmlFor="Free"
              className="ml-2 text-sm font-medium select-none"
            >
              Free
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Ads"
              name="ott_monetization_types"
              value="ads"
              defaultChecked
            />
            <label
              htmlFor="Ads"
              className="ml-2 text-sm font-medium select-none"
            >
              Ads
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Rent"
              name="ott_monetization_types"
              value="rent"
              defaultChecked
            />
            <label
              htmlFor="Rent"
              className="ml-2 text-sm font-medium select-none"
            >
              Rent
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="Buy"
              name="ott_monetization_types"
              value="buy"
              defaultChecked
            />
            <label
              htmlFor="Buy"
              className="ml-2 text-sm font-medium select-none"
            >
              Buy
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Availabilities;
