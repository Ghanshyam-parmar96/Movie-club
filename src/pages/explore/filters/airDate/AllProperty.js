import React from 'react'
import { useSelector } from 'react-redux';

const AllProperty = (mediaType) => {
    const release_date_To = useSelector(
        (state) => state.explore["release_date.lte"]
      );
      const release_date_From = useSelector(
        (state) => state.explore["release_date.gte"]
      );
      const air_data_To = useSelector((state) => state.explore["air_date.lte"]);
      const air_data_From = useSelector((state) => state.explore["air_date.gte"]);
      const first_air_date_To = useSelector(
        (state) => state.explore["first_air_date.lte"]
      );
      const first_air_date_From = useSelector(
        (state) => state.explore["first_air_date.gte"]
      );
    
      const toDates =
        (mediaType === "movie" && release_date_To) ||
        air_data_To ||
        first_air_date_To;
      const To = toDates.split("-").reverse().join("-");
    
      const fromDates =
        (mediaType === "movie" && release_date_From) ||
        air_data_From ||
        first_air_date_From;
      const From = fromDates.split("-").reverse().join("-");
  return {To, From}
}

export default AllProperty
