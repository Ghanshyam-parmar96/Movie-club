import { useEffect, useState } from "react";
import GridItemCard from "../../components/gridItemCard/GridItemCard";
import { useSelector } from "react-redux";

const Subscribed = () => {
  const [selectedOption, setSelectedOption] = useState(2);
  const [searchResults, setSearchResults] = useState([]);
  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);
  useEffect(() => {
    if (localStorage.getItem("likedDataList")) {
      setSearchResults(JSON.parse(localStorage.getItem("likedDataList")));
    }
  }, []);


  const handleLiked = () => {
    setSelectedOption(2);
    if (localStorage.getItem("likedDataList")) {
      setSearchResults(JSON.parse(localStorage.getItem("likedDataList")));
    } else {
      setSearchResults([]);
    }
  };

  const handleMovies = async () => {
    setSelectedOption(0);
    const ratedMovies = await fetch(
      `https://api.themoviedb.org/3/guest_session/${
        JSON.parse(localStorage.getItem("guest_id"))?.guest_session_id
      }/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const res = await ratedMovies.json();
    const data = res?.results?.map((item) => ({...item, media_type : "movie"}));
    setSearchResults(data);
  };

  const handleTv = async () => {
    setSelectedOption(1);
    const ratedMovies = await fetch(
      `https://api.themoviedb.org/3/guest_session/${
        JSON.parse(localStorage.getItem("guest_id"))?.guest_session_id
      }/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const res = await ratedMovies.json();
    const data = res?.results?.map((item) => ({...item, media_type : "tv"}));
    setSearchResults(data);
  };

  return (
    <div className="bg-[#1e1e1e] h-screen max-full w-full overflow-hidden max-w-[1400px] mx-auto">
      <div className="pt-20 flex items-center justify-center gap-3">
        <button
          className={`flex items-center gap-1 py-1 px-3 bg-white rounded-3xl text-sm sm:text-base font-semibold border-2 ${
            selectedOption === 0 ? "border-sky-500 text-sky-500" : ""
          } `}
          onClick={handleMovies}
        >
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </span>{" "}
          Rated Movie
        </button>
        <button
          className={`flex items-center gap-1 text-sm sm:text-base py-1 px-3 bg-white rounded-3xl font-semibold border-2 ${
            selectedOption === 1 ? "border-sky-500 text-sky-500" : ""
          } `}
          onClick={handleTv}
        >
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </span>{" "}
          Rated Tv
        </button>
        <button
          className={`flex items-center gap-1 text-sm sm:text-base py-1 px-3 bg-white rounded-3xl font-semibold border-2 ${
            selectedOption === 2 ? "border-sky-500 text-sky-500" : ""
          } `}
          onClick={handleLiked}
        >
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </span>{" "}
          Liked
        </button>
      </div>
      <div className="border-t-2 border-[#99c0e5] h-[calc(100vh_-_130px)] max-full mt-5 w-11/12 mx-auto relative overflow-y-auto scrollbarNone">
        <div className="flex flex-wrap gap-2 md:gap-3 mx-auto mt-5 items-center justify-start">
          {searchResults.length === 0 && (
            <div className="text-2xl text-white text-center w-full mt-10">
              {" "}
              There Is No Data Available To See
            </div>
          )}
          {searchResults.map((item) => (
            <GridItemCard
              posterImageUrl={posterImageUrl}
              item={item}
              key={item.id}
              className="w-[calc(50%_-_5px)] esm:w-[calc(33%_-_4px)] md:w-[calc(25%_-_9px)] lg:w-[calc(20%_-_10px)] xl:w-[calc(16%_-_2px)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribed;
