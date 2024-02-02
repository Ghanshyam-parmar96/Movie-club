import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { original_language } from "../../../../store/exploreSlice";
import fetchApi from "../../../../utils/fetchApi";

const LanguageList = ({ setPop, pop }) => {
  const [languageData, setLanguageData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const dispatch = useDispatch();

  const fetchData = async () => {
    fetchApi("/configuration/languages")
      .then((res) => {
        setLanguageData([
          { iso_639_1: "00", english_name: "None Selected", name: "" },
          ...res,
        ]);
        setSearchData([
          { iso_639_1: "00", english_name: "None Selected", name: "" },
          ...res,
        ]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const result = languageData.filter((item) =>
      item.english_name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchData(result);
  };

  const handleClickData = (event) => {
    const [filterLanguage] = languageData.filter(
      (item) => item.iso_639_1 === event.target.dataset.offsetIndex
    );
    localStorage.setItem(
      "language",
      filterLanguage.english_name +
        (filterLanguage.name && `(${filterLanguage.name})`)
    );
    if (
      filterLanguage.iso_639_1 !== "xx" &&
      filterLanguage.iso_639_1 !== "00"
    ) {
      dispatch(original_language(filterLanguage.iso_639_1));
    } else {
      dispatch(original_language(""));
    }
    setPop(!pop);
  };

  return (
    <div
      className={`absolute px-2 bottom-10 left-0 w-52 scale-up-bl z-10 border border-[#f3f3f3] bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,.1)] ${
        pop ? "block" : "hidden"
      }`}
    >
      <div className=" my-2 rounded-xl text-black overflow-y-auto cardScrollbar h-72 w-full">
        <div className="flex items-center gap-2 rounded-md p-1 mx-2 my-3 border-[1px] border-sky-400">
          <input
            type="text"
            name="languageList"
            autoComplete="on"
            className="focus:outline-none text-sm pl-1 tracking-wider w-full"
            onChange={(e) => handleSearch(e)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ul
          unselectable="off"
          className="text-black"
          aria-hidden="true"
          id="watch_region_listbox"
          aria-live="polite"
          data-role="staticlist"
          role="listbox"
          onClick={(e) => handleClickData(e)}
        >
          {searchData.map((item) => {
            return (
              <li
                key={item.iso_639_1}
                role="option"
                unselectable="off"
                className="flex items-center gap-1 mt-2 px-2 text-sm tracking-wider select-none truncate"
                aria-selected="false"
                data-offset-index={item.iso_639_1}
              >
                {item.english_name}
                {item.name && `(${item.name})`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageList;
