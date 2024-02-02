import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLoaderData, useSearchParams } from "react-router-dom";
import GridItemCard from "../../components/gridItemCard/GridItemCard";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
import fetchApi from "../../utils/fetchApi";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [pageNum, setPageNum] = useState(2);
  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query");

  const fetchNextPageData = async () => {
    fetchApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then((res) => {
        console.log(res);
        const results = res?.results?.filter(
          (element) =>
            element.media_type === "movie" || element.media_type === "tv"
        );
        setSearchResults((prev) => [...prev, ...results]);
        setPageNum((prev) => prev + 1);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (data?.results?.length > 0) {
      const results = data?.results?.filter(
        (element) =>
          element.media_type === "movie" || element.media_type === "tv"
      );
      setSearchResults(results);
    }
  }, [data]);
  return (
    <>
      <div className=" inset-0 w-full fixed -z-20 h-screen bg-cover bg-center mx-auto bg-[url('/blackBackground.webp')] max-w-[1400px]"></div>
      <div className=" mt-20 mx-auto px-4 sm:px-7 lg:px-10 max-w-[1400px] ">
        <h2 className="text-white text-2xl font-Inter font-medium">
          {" "}
          Search Result of {query}
        </h2>
        <InfiniteScroll
          className="flex flex-wrap gap-2 md:gap-3 max-w-[1400px] mx-auto mt-5 items-center justify-start"
          dataLength={searchResults?.length || 0}
          next={fetchNextPageData}
          hasMore={pageNum <= data?.total_pages}
          loader={<Spinner />}
          endMessage={
            <p className="flex items-center justify-center w-full h-20 text-white text-xl font-medium">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {searchResults.map((item) => (
            <GridItemCard
              posterImageUrl={posterImageUrl}
              item={item}
              key={item.id}
              className="w-[calc(50%_-_5px)] esm:w-[calc(33%_-_4px)] md:w-[calc(25%_-_9px)] lg:w-[calc(20%_-_10px)] xl:w-[calc(16%_-_2px)]"
            />
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default SearchResults;
