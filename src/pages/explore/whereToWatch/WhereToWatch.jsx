import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import { useDispatch, useSelector } from "react-redux";
import { watch_providers, watch_region } from "../../../store/exploreSlice";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";

const countryData = {
  id: 58,
  countryCode: "IN",
  country: "India",
  flagIcon:
    "https://www.themoviedb.org/assets/2/flags_v2/48/IN-5b73f4605171eaa60539e5d69a85bebe7b800f5ee6f94f24dafecaa0d47209fd.png",
};
const WhereToWatch = () => {
  const [show, setShow] = useState(false);
  const [showSearchPop, setShowSearchPop] = useState(false);
  const [showCountryData, setShowCountryData] = useState(countryData);
  const [provider, setProvider] = useState([]);

  const dispatch = useDispatch();

  const watch_region_code = useSelector((state) => state.explore.watch_region);
  const logoImageUrl = useSelector((state) => state.home.logoImageUrl);

  const handleChecked = (id, isChecked) => {
    const checkedData = provider.map((item) => {
      if (item.provider_id === id) {
        return { ...item, checked: !isChecked };
      }
      return item;
    });
    setProvider(checkedData);
  };

  useEffect(() => {
    dispatch(watch_region(showCountryData.countryCode));
  }, [showCountryData]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/watch/providers/tv?language=hi-IN&watch_region=${watch_region_code}&api_key=57f638ca8d6dc459c63c38e10e0e0d35`
      );
      const data = await res.json();
      const newData = data.results.map((item) => ({
        provider_id: item.provider_id,
        provider_name: item.provider_name,
        logo_path: item.logo_path,
        checked: false,
      }));
      setProvider(newData);
    } catch (error) {
      (error) => console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const newArray = provider
      .filter((item) => item.checked) // Filter items where selected is true
      .map((item) => item.provider_id) // Map the IDs of the selected items
      .join("|");

    dispatch(watch_providers(newArray));
  }, [handleChecked]);

  return (
    <details>
      <summary
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
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>

          <span>Where To Watch</span>
        </h3>
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
      </summary>
      <div style={{ display: show ? "block" : "none" }}>
        <div className="py-2 px-4">
          <h3 className="font-semibold text-sm ">Country</h3>

          {/* country details */}
          <div className="bg-gray-200 rounded-md mt-2 relative text-black">
            <div
              className="flex items-center justify-between py-2 px-3"
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

          {/* provider list */}
          <div className="mt-5">
            <ul className="grid grid-cols-4 gap-y-4  place-items-center ">
              {provider.length !== 0 &&
                provider.map((item) => {
                  const imgUrl = logoImageUrl + item.logo_path;
                  return (
                    <li
                      key={item.provider_id}
                      className=" relative"
                      aria-selected="false"
                      data-offset-index={item.provider_id}
                      onClick={() =>
                        handleChecked(item.provider_id, item.checked)
                      }
                    >
                      <span title={item.provider_name}>
                        <LazyImage
                          src={imgUrl}
                          className="rounded-md h-10 w-10 object-cover object-center select-none"
                        />
                      </span>
                      <div
                        className={` bottom-0 absolute rounded-full bg-[#03b3f9] z-10  right-0 ${
                          item.checked ? "block" : "hidden"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={4.5}
                          stroke="#fff"
                          className="w-[18px] h-[18px] p-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
};

export default WhereToWatch;
