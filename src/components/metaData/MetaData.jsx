import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

const MetaData = ({
  url = "http://localhost:5173/",
  title = "Movie Club - Latest Movies Reviews, Trailers, and Tv Show's",
  description = "Movie Club is a website dedicated to providing the latest movies reviews, trailers, and news. We cover a wide range of movies, from blockbusters to independent films. We also provide information about upcoming movies and movie releases. Visit our website today to learn more about your favorite movies!",
  image
}) => {
  const metaImage = image || useSelector((state) => state.home.metaImage);
  return (
    <Helmet>     
      {/* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta name="description" content={description}/>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content={url}/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={metaImage}/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="movie-mc.netlify.app"/>
      <meta property="twitter:url" content={url}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={metaImage}/>

  </Helmet>
  );
};

export default MetaData;
