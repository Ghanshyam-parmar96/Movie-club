import React from "react";
import HeroSection from "./heroSection/HeroSection";
import Trending from "./trending/Trending";
import Trailer from "./trailer/Trailer";
import Populer from "./populer/Populer";
import TopRated from "./topRated/TopRated";
import Footer from "../../components/footer/Footer";
import HomeMeta from "../../components/metaData/MetaData";


const Home = () => {
  return (
    <div className="text-white bg-[#1e1e1e] max-w-[1400px] mx-auto ">
      <HomeMeta/>
      <HeroSection />
      <Trending />
      <Trailer />
      <Populer />
      <TopRated />
      <Footer />
    </div>
  );
};

export default Home;
