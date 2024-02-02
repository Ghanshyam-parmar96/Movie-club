import { useEffect, useState } from "react";
import SearchExploreBtn from "./SearchExploreBtn";
import Filters from "./filters/Filters";
import SortBy from "./sortBy/SortBy";
import WhereToWatch from "./whereToWatch/WhereToWatch";
import ExploreDataLoader from "./ExploreDataLoader";
import { useLocation} from "react-router-dom";
import MetaData from "../../components/metaData/MetaData";

const Explore = () => {
  const [showFilter, setShowFilter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowFilter(false);
  }, [location]);

  return (
    <section className="flex pt-14 md:px-3 lg:px-8 cardScrollbar gap-2 lg:gap-5 relative font-Inter mx-auto select-none max-w-[1400px] ">
      <MetaData 
        title="Movie-club - Explore Movie's and Tv Show's" 
        description="Explore a vast collection of movies and Tv Show's, including popular titles, new releases, and hidden gems. and Discover a wide range of movies and Tv Show's, from blockbusters to independent films"
      />
     
      <div className="bg-[url('/blackBackground.webp')] -z-10 h-screen w-full fixed mx-auto inset-0  bg-no-repeat bg-center bg-cover max-w-[1400px]"></div>
      <div
        className={`bg-black/30 h-full w-full absolute z-10 top-0 right-0 ${
          showFilter ? "block" : "hidden"
        } `}
        onClick={() => setShowFilter(false)}
      ></div>

      <aside className="relative h-[calc(100vh_-_58px)] max-full">
        <div className="md:hidden rounded-3xl bg-black absolute top-1/3 -left-4 z-10  ">
          <span
            className="py-8 pl-4 inline-block cursor-pointer"
            onClick={() => setShowFilter(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
        <div
          className={`absolute w-64  p-2  bottom-0 left-0 z-10 flex flex-col gap-1 scrollbarNone flex-shrink-0 card backdrop-blur-2xl transition-transform ease-in-out duration-1000 md:backdrop-blur-sm md:bg-black/30 md:relative md:translate-x-0  bg-black/70 text-white overflow-x-hidden h-full ${
            showFilter ? "translate-x-0 " : "-translate-x-80"
          } `}
        >
          <div className="relative md:hidden">
            <span
              className="absolute -right-0 bg-black p-2 -top-1 rounded-3xl font-bold hover:text-sky-300 cursor-pointer"
              onClick={() => setShowFilter(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
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
          </div>
          <SortBy />
          <WhereToWatch />
          <Filters />
          <SearchExploreBtn />
        </div>
      </aside>

      <main
        id="scrollableDiv"
        className="w-full h-[calc(100vh_-_58px)] max-full overflow-y-auto scrollbarNone"
      >
        <ExploreDataLoader />
      </main>
    </section>
  );
};

export default Explore;
