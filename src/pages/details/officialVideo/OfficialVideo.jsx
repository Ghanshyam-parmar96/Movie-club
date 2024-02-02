import React, { useState } from "react";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import VideoSlider from "../../../components/videoSlider/VideoSlider";

const OfficialVideo = ({ data }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null); 
  
  if (data.length <= 0 )return;
  return (
    <div className="w-11/12  mx-auto my-8 ">
      <div className=" flex items-center justify-between font-Roboto mb-4">
        <h2 className="text-2xl">Official Videos</h2>
      </div>
      <div className="relative w-full mx-auto">
        <VideoSlider data={data} setShow={setShow} setVideoId={setVideoId}  />
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

export default OfficialVideo;
