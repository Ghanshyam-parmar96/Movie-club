import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TopCast from "./topCast/TopCast";
import DetailBanner from "./detailBanner/DetailBanner";
import OfficialVideo from "./officialVideo/OfficialVideo";
import SimilerSection from "./similerSection/SimilerSection";
import Recommendations from "./recommendations/Recommendations";
import Footer from "../../components/footer/Footer";


const Details = () => {
  const { mediaType, id } = useParams();
  const data = useLoaderData();
  
  return (
    <>
      <div className="text-white relative bg-[#1e1e1e]  max-w-[1400px] mx-auto ">
        <DetailBanner data={data} mediaType={mediaType} id={id}/>
        <TopCast data={data?.credits?.cast} />
        <OfficialVideo data={data?.videos?.results} />
        <SimilerSection
          mediaType={mediaType}
          data={data?.similar?.results}
        />
        <Recommendations
          mediaType={mediaType}
          data={data?.recommendations?.results}
        />
        <Footer/>
      </div>
    </>
  );
};

export default Details;
