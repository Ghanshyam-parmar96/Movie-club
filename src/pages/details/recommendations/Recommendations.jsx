import React from 'react'
import Carousel from '../../../components/carousel/Carousel';
import { useSelector } from 'react-redux';

const Recommendations = ({mediaType, data}) => {

  const posterImageUrl = useSelector((state) => state.home.posterImageUrl);

  if (data.length <= 0 )return;
  return (
    <div className="w-11/12 mx-auto my-5 ">
    <div className=" flex items-center justify-between font-Roboto">
      <h2 className="text-2xl">Recommendations</h2>
    </div>
    <Carousel data={data} loading={false} posterImageUrl={posterImageUrl} type={mediaType} />
    
  </div>
  )
}

export default Recommendations
