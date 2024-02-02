import React, { useEffect, useState } from "react";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import VideoSlider from "../../../components/videoSlider/VideoSlider";
import { useLoaderData } from "react-router-dom";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";

const Trailer = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [videos, setVideos] = useState([]);

  const data = useLoaderData();
  const bgImage = videos.length > 0 ? `https://img.youtube.com/vi/${videos[Math.floor(Math.random() * 5)].key}/mqdefault.jpg` : "https://img.youtube.com/vi/hyyyKcfJRGQ/mqdefault.jpg";

  useEffect(() => {
    const someEntry = data?.results.slice(0, 5);

    const fetchData = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=57f638ca8d6dc459c63c38e10e0e0d35`
      );
      const result = await response.json();
      return result.results;
    };

    const fetchAllData = async () => {
      try {
        const responses = await Promise.all(
          someEntry.map((element) => fetchData(element.id))
        );

        const newArr = [];

        for (let i = 0; i < 7; i++) {
          for (let j = 0; j < 5; j++) {
            let singleElement = responses[j][i] ? responses[j][i] : [];
            newArr.push(singleElement);
          }
        }
        setVideos(newArr.flat())
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const setTime = setTimeout(() => {
      fetchAllData();
    }, 3000);

    return () => clearTimeout(setTime);

  },[data])

  if (data.length <= 0 )return;
  // if ([...data].length <= 0) return;
  return (
    <div className={`w-11/12  mx-auto relative my-8 h-72 xl:h-80 `}>
      <div className="absolute top-0 w-full opacity-30 left-0 h-full posterImg"><LazyImage src={bgImage} className="h-full w-full object-cover object-center" /></div>
      <div className=" flex items-center justify-between font-Roboto pt-8 mb-4">
        <h2 className="text-2xl relative z-10">Official Trailer Videos</h2>
      </div>
      <div className="relative w-full mx-auto">
        <VideoSlider data={videos} setShow={setShow} setVideoId={setVideoId}  />
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Trailer;
