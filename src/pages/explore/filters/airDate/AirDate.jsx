import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  air_date_gte,
  air_date_lte,
  first_air_date_gte,
  first_air_date_lte,
  region,
  release_date_gte,
  release_date_lte,
  swiper_first_lte,
  swiper_lte,
} from "../../../../store/exploreSlice";
// import AllProperty from "./AllProperty";
import ReleaseType from "./ReleaseType";
import CountryList from "../../whereToWatch/CountryList";

const countryData = {
  id: 58,
  countryCode: "IN",
  country: "India",
  flagIcon:
    "https://www.themoviedb.org/assets/2/flags_v2/48/IN-5b73f4605171eaa60539e5d69a85bebe7b800f5ee6f94f24dafecaa0d47209fd.png",
};

const AirDate = ({ mediaType }) => {
  const [showSearchPop, setShowSearchPop] = useState(false);
  const [showCountryData, setShowCountryData] = useState(countryData);
  const [searchAllCountries, setSearchAllCountries] = useState(true);
  const [showAllEpisode, setShowAllEpisode] = useState(true);
  const [showAllRelease, setShowAllRelease] = useState(true);
  const fromDatePicker = useRef();
  const toDatePicker = useRef();
  const dispatch = useDispatch();
  const release_date_To = useSelector((state) => state.explore["release_date.lte"]);
  const release_date_From = useSelector((state) => state.explore["release_date.gte"]);
  const air_data_To = useSelector((state) => state.explore["air_date.lte"]);
  const air_data_From = useSelector((state) => state.explore["air_date.gte"]);
  const first_air_date_To = useSelector((state) => state.explore["first_air_date.lte"]);
  const first_air_date_From = useSelector((state) => state.explore["first_air_date.gte"]);

  const toDates =
    (mediaType === "movie" && release_date_To) ||
    air_data_To ||
    first_air_date_To;
  const To = toDates.split("-").reverse().join("-");

  const fromDates =
    (mediaType === "movie" && release_date_From) ||
    air_data_From ||
    first_air_date_From;
  const From = fromDates.split("-").reverse().join("-");

console.log( From, To, fromDates, toDates);
  // const { To, From } = AllProperty(mediaType);

  const handleDateSetter = (e) => {
    if (mediaType === "movie") {
      if (e.target.name === "ToDate") {
        dispatch(release_date_lte(e.target.value));
      } else {
        dispatch(release_date_gte(e.target.value));
      }
    } else {
      if (showAllEpisode) {
        if (e.target.name === "ToDate") {
          dispatch(air_date_lte(e.target.value));
        } else {
          dispatch(air_date_gte(e.target.value));
        }
      } else {
        if (e.target.name === "ToDate") {
          dispatch(first_air_date_lte(e.target.value));
        } else {
          dispatch(first_air_date_gte(e.target.value));
        }
      }
    }
  };

  const handleSearchAllEpisode = (e) => {
    if (e.target.checked) {
      setShowAllEpisode(true);
      dispatch(swiper_lte());
    } else {
      setShowAllEpisode(false);
      dispatch(swiper_first_lte());
    }
  };

  useEffect(() => {
    if (!searchAllCountries) {
      dispatch(region(showCountryData.countryCode));
    } else {
      dispatch(region(""));
    }
  }, [showCountryData, searchAllCountries]);

  return (
    <div className="relative ">
      <h3 className=" ml-3 mt-4 font-bold text-base text-[#ab0000]">
        {mediaType === "movie" ? "Release Dates" : "Air Dates"}
      </h3>
      {mediaType === "movie" ? (
        //  movie section
        <>
          <div className="mt-2 ml-6">
            <input
              type="checkbox"
              id="Search_all_episodes"
              name="Search_all_episodes"
              onClick={(e) => setShowAllRelease(e.target.checked)}
              defaultChecked
            />
            <label
              htmlFor="Search_all_episodes"
              className="ml-2 text-sm font-medium select-none"
            >
              Search All Releases?
            </label>
          </div>

          <div className={`${showAllRelease ? "hidden" : "block"} ml-8`}>
            <div>
              <input
                type="checkbox"
                id="search_all_countrties"
                name="search_all_countrties"
                onClick={(e) => setSearchAllCountries(e.target.checked)}
                defaultChecked
              />
              <label
                htmlFor="search_all_countrties"
                className="ml-2 text-sm font-medium select-none"
              >
                Search All Countries?
              </label>
            </div>

            {/* country list */}

            <div
              className={`bg-gray-100 rounded-md my-3 w-48 text-black relative ${
                searchAllCountries ? "hidden" : "block"
              }`}
            >
              <div
                className="flex items-center justify-between   py-2 px-3"
                onClick={() => setShowSearchPop(!showSearchPop)}
              >
                <span
                  key={showCountryData.id}
                  draggable="false"
                  data-offset-index="1"
                  className="select-none flex gap-2"
                >
                  <img
                    src={showCountryData.flagIcon}
                    className="h-6 w-8 object-cover object-center"
                    alt="India flag image"
                    draggable="false"
                  />
                  <span>{showCountryData.country}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
              </div>
              {showSearchPop && (
                <CountryList
                  setPop={setShowSearchPop}
                  pop={showSearchPop}
                  countryCode={setShowCountryData}
                />
              )}
            </div>

            {/* Ralease type component */}

            <ReleaseType allRelease={showAllRelease} />
          </div>
        </>
      ) : (
        // tv section
        <>
          <div className="mt-2 ml-8">
            <input
              type="checkbox"
              id="Search_all_episodes"
              name="Search_all_episodes"
              onClick={handleSearchAllEpisode}
              defaultChecked
            />
            <label
              htmlFor="Search_all_episodes"
              className="ml-2 text-sm font-medium select-none"
            >
              Search all episodes?
            </label>
          </div>
          <div className={`${showAllEpisode ? "hidden" : "block"} ml-8`}>
            <input
              type="checkbox"
              id="Search_first_air_date"
              name="Search_first_air_date"
              defaultChecked
            />
            <label
              htmlFor="Search_first_air_date"
              className="ml-2 text-sm font-medium select-none"
            >
              Search first air date?
            </label>
          </div>
        </>
      )}

      {/* Date input box */}
      <div>
        <div className="flex items-center justify-between my-3 ml-8">
          <span className="text-sm font-bold text-[#ab0000]">From</span>
          <div className="border-2 border-[#e4e7eb] mr-4 relative">
            <input
              type="date"
              name="FromDate"
              ref={fromDatePicker}
              placeholder="dd/mm/yyyy"
              id="dateFrom"
              onChange={handleDateSetter}
              className="text-black select-none invisible absolute right-4 focus:outline-none w-1 h-1"
              min="2010-01-01"
              value={fromDates}
            />
            <input
              type="text"
              role="datepicker"
              pattern="\d{2}-\d{2}-\d{4}"
              placeholder="DD/MM/YYYY"
              name="datepicker"
              value={From}
              disabled
              // onChange={(e) => e.stopPropagation()}
              className="bg-transparent focus:outline-none text-xs font-semibold w-24 px-2 "
            />
            <label htmlFor="dateFrom">
              <button
                onClick={() => fromDatePicker.current.showPicker()}
                className="bg-[#e4e7eb] px-2 py-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className="h-full w-full inline-block"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                </svg>
              </button>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between my-3 ml-8 relative">
          <span className="text-sm font-bold text-[#ab0000]">To</span>
          <div className="border-2 border-[#e4e7eb] mr-4">
            <input
              type="date"
              name="ToDate"
              ref={toDatePicker}
              id="toDate"
              onChange={handleDateSetter}
              className="text-black select-none invisible absolute right-4 focus:outline-none w-1 h-1 "
              min="2010-01-01"
              value={toDates}
            />
            <input
              type="text"
              role="datepicker"
              name="datepicker"
              placeholder="DD/MM/YYYY"
              value={To}
              // onChange={(e) => e.stopPropagation()}
              disabled
              className="bg-transparent focus:outline-none text-xs font-semibold w-24 px-2"
            />
            <label htmlFor="toDate">
              <button
                onClick={() => toDatePicker.current.showPicker()}
                className="bg-[#e4e7eb] px-2 py-[2px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className="h-full w-full inline-block"
                >
                  <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                </svg>
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirDate;
