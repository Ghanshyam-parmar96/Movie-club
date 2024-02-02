import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { with_genres } from "../../../../store/exploreSlice";

const moviesGenres = [
  {
    id: 28,
    name: "Action",
    selected: false,
  },
  {
    id: 12,
    name: "Adventure",
    selected: false,
  },
  {
    id: 16,
    name: "Animation",
    selected: false,
  },
  {
    id: 35,
    name: "Comedy",
    selected: false,
  },
  {
    id: 80,
    name: "Crime",
    selected: false,
  },
  {
    id: 99,
    name: "Documentary",
    selected: false,
  },
  {
    id: 18,
    name: "Drama",
    selected: false,
  },
  {
    id: 10751,
    name: "Family",
    selected: false,
  },
  {
    id: 14,
    name: "Fantasy",
    selected: false,
  },
  {
    id: 36,
    name: "History",
    selected: false,
  },
  {
    id: 27,
    name: "Horror",
    selected: false,
  },
  {
    id: 10402,
    name: "Music",
    selected: false,
  },
  {
    id: 9648,
    name: "Mystery",
    selected: false,
  },
  {
    id: 10749,
    name: "Romance",
    selected: false,
  },
  {
    id: 878,
    name: "Science Fiction",
    selected: false,
  },
  {
    id: 10770,
    name: "TV Movie",
    selected: false,
  },
  {
    id: 53,
    name: "Thriller",
    selected: false,
  },
  {
    id: 10752,
    name: "War",
    selected: false,
  },
  {
    id: 37,
    name: "Western",
    selected: false,
  },
];

const tvGenres = [
  {
    id: 10759,
    name: "Action & Adventure",
    selected: false,
  },
  {
    id: 16,
    name: "Animation",
    selected: false,
  },
  {
    id: 35,
    name: "Comedy",
    selected: false,
  },
  {
    id: 80,
    name: "Crime",
    selected: false,
  },
  {
    id: 99,
    name: "Documentary",
    selected: false,
  },
  {
    id: 18,
    name: "Drama",
    selected: false,
  },
  {
    id: 10751,
    name: "Family",
    selected: false,
  },
  {
    id: 10762,
    name: "Kids",
    selected: false,
  },
  {
    id: 9648,
    name: "Mystery",
    selected: false,
  },
  {
    id: 10763,
    name: "News",
    selected: false,
  },
  {
    id: 10764,
    name: "Reality",
    selected: false,
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
    selected: false,
  },
  {
    id: 10766,
    name: "Soap",
    selected: false,
  },
  {
    id: 10767,
    name: "Talk",
    selected: false,
  },
  {
    id: 10768,
    name: "War & Politics",
    selected: false,
  },
  {
    id: 37,
    name: "Western",
    selected: false,
  },
];

const Genres = ({ mediaType }) => {
  const [selectedGenres, setSelectedGenres] = useState(moviesGenres);

  const dispatch = useDispatch();

  const handleGenres = (e) => {
    if (e.target.tagName !== "BUTTON") return;
    const selectedValue =
      e.target.dataset.selectedGenres === "true" ? true : false;
    e.target.dataset.selectedGenres = !selectedValue;
    const selectedData = selectedGenres.map((item) => {
      if (item.id === Number(e.target.dataset.gvalue)) {
        return { ...item, selected: !selectedValue };
      }
      return item;
    });
    setSelectedGenres(selectedData);
  };

  useEffect(() => {
    const selected = selectedGenres
      .filter((item) => item.selected)
      .map((item) => item.id)
      .join();
    dispatch(with_genres(selected));
  }, [handleGenres]);

  useEffect(() => {
    setSelectedGenres(mediaType === "movie" ? moviesGenres : tvGenres);
  }, [mediaType]);

  return (
    <div className="relative mt-4">
      <h3 className="pt-4 ml-3 font-bold text-base text-[#ab0000]">Genres</h3>
      <ul className="mt-2 ml-4" onClick={handleGenres}>
        {selectedGenres.map((item) => (
          <li key={item.id} className={`inline-block rounded-xl m-1`}>
            <button
              className={`text-sm rounded-xl py-1 px-3 font-light border ${
                item.selected
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-700 "
              }`}
              data-gvalue={item.id}
              data-selected-genres={item.selected}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
