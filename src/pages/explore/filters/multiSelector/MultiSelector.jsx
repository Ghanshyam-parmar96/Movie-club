import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { with_keywords } from "../../../../store/exploreSlice";
import fetchApi from "../../../../utils/fetchApi";

const MultiSelector = () => {
  const [allkeywords, setAllkeywords] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const focusInputTag = useRef();

  const handleSelected = (e) => {
    if (e.target.tagName === "UL") return;
    const id = parseInt(e.target.dataset.offsetIndex);
    const isTrue = selectedKeywords.some((item) => item.id === id);
    if (!isTrue) {
      const filterData = allkeywords.find((item) => item.id === id);
      setSelectedKeywords((prev) => [...prev, filterData]);
      setShow(false);
      setSearch("");
      focusInputTag.current.focus();
    }
  };

  const handleClearKeywords = (id) => {
    const filterData = selectedKeywords.filter((item) => item.id !== id);
    setSelectedKeywords(filterData);
  };

  const handleKeywordSearch = async (keyword) => {
    if (keyword.length < 3) return;

    fetchApi(`/search/keyword?query=${keyword}&page=1`).then((res) => {
      setAllkeywords(res.results);
      setShow(true);
    }).catch((err) => console.log(err))
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      handleKeywordSearch(search);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    const keywords = selectedKeywords.map((item) => item.id).join("|");
    dispatch(with_keywords(keywords));
  }, [selectedKeywords]);

  return (
    <div className="relative mb-5">
      <h3 className="pt-4 mb-3 text-[#AB0000] text-base font-bold ml-3">
        Keywords
      </h3>

      <label
        htmlFor="searchListkeyword"
        className="mx-4 mb-2 flex flex-wrap w-52  pr-6 relative border border-blue-500"
      >
        {selectedKeywords.length > 0 && (
          <span
            onClick={() => {
              setSelectedKeywords([]);
              setSearch("");
              focusInputTag.current.focus();
            }}
            className="absolute h-5 w-5 cursor-pointer text-black rounded-3xl bg-white hover:bg-gray-200 top-1 right-1 z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}
        {selectedKeywords.length > 0 &&
          selectedKeywords.map((item) => {
            return (
              <span
                key={item.id}
                className="text-xs flex-shrink-0 inline-flex items-center hover:text-white hover:bg-blue-600 group py-[1px] px-1 border border-gray-700 hover:border-blue-600 rounded m-[3px]  text-center"
              >
                {item.name}

                <span
                  data-x-index={item.id}
                  onClick={() => handleClearKeywords(item.id)}
                  className="h-3 w-3 ml-1 cursor-pointer group-hover:text-black group-hover:bg-slate-200 group-hover:rounded-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </span>
            );
          })}
        <input
          type="text"
          id="searchListkeyword"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={
            selectedKeywords.length <= 0 ? "Filter by keywords..." : ""
          }
          value={search}
          key={"keywords"}
          ref={focusInputTag}
          autoComplete="off"
          style={{
            width:
              selectedKeywords.length === 0
                ? "100%"
                : `${search.length * 12}px`,
          }}
          className={`bg-transparent text-sm max-w-full py-1 min-w-[60px] px-2 focus:outline-none tracking-wider font-medium placeholder:font-medium placeholder:text-[#4b4848]`}
        />
      </label>

      <div className={`relative ${show ? "block" : "hidden"}`}>
        <div className="absolute bottom-12 left-3 text-black scale-up-bl z-30 border border-[#e3e3e3] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.1)] w-52">
        <span
            onClick={() => setShow(false)}
            className="absolute h-6 w-6 cursor-pointer rounded-3xl bg-white hover:bg-gray-200 top-3 right-3 z-20"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            </span>
          <div className=" my-2 cardScrollbar overflow-y-auto h-52 w-full">
            <ul onClick={handleSelected}>
              {allkeywords.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-sm tracking-wider pl-5 p-1 font-light hover:bg-blue-400 hover:text-white"
                    data-offset-index={item.id}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelector;
