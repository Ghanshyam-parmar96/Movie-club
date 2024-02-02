import React, { useEffect, useState, useRef } from 'react'
import GridItemCard from '../../components/gridItemCard/GridItemCard'
import { useSelector } from 'react-redux'
import { useLoaderData, useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../../components/spinner/Spinner';
import fetchApi from '../../utils/fetchApi';

const ExploreDataLoader = () => {
    const [data , setData] = useState([]);
    const [pageNum, setPageNum] = useState(2);
    const { mediaType } = useParams();
    const loaderData = useLoaderData();
    const posterImageUrl = useSelector((state) => state.home.posterImageUrl)
    const exploreLoadData = useSelector((state) => state.home.exploreLoadData)
    const exploreQuery = useSelector((state) => state.home.exploreQuery)
    const totelHeight = useRef(null);


    const fetchNextPageData = async () => {
        if (Object.hasOwn(exploreLoadData, 'page')) {
            const res = await fetchApi(`${exploreQuery}&page=${pageNum}`);
            setData((prev) => [...prev, ...res.results]);
        }else{
            const res = await fetchApi(`/discover/${mediaType}?page=${pageNum}`);
            setData((prev) => [...prev, ...res.results]);
        }
        setPageNum((prev) => prev + 1);
    };


    useEffect(() => {
        setData(loaderData.results)
    },[loaderData])

    useEffect(() => {
        if (Object.hasOwn(exploreLoadData, 'page')) {
            setData(exploreLoadData.results)
        }
    },[exploreLoadData])
    
  return (
      <div  
      className='h-full w-full '
          ref={totelHeight}
      >
        <InfiniteScroll
          className="flex flex-wrap gap-2 scrollbarNone"
          scrollableTarget="scrollableDiv"
          dataLength={data.length || 0}
          next={fetchNextPageData}
          hasMore={pageNum <= ((Object.hasOwn(exploreLoadData, 'total_pages')) ? exploreLoadData.total_pages : loaderData.total_pages)}
          loader={<Spinner />}
          endMessage={
            <p className="flex items-center justify-center w-full h-20 text-white text-xl font-medium">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
            {data?.map((item) => (
                <GridItemCard
                    item={item}
                    type={mediaType}
                    posterImageUrl={posterImageUrl}
                    className="inline-block w-[calc(50%_-_8px)] sm:w-[calc(33%_-_5px)] md:w-[calc(33%_-_5px)] lg:w-[calc(25%_-_6px)] xl:w-[calc(20%_-_7px)]"
                    key={item.id}
                />
            ))} 
        </InfiniteScroll>
    </div>
  )
}

export default ExploreDataLoader
