import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {closeMenu} from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import RecommandationCard from './RecommandationCard';
import { useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import { Link } from 'react-router-dom';

const WatchPage = () => {
  const [searchParam, setSearchParam]= useSearchParams();
  const videoCode = searchParam.get("v")
  const dispatch = useDispatch();
  
  // why use effect me dala h closeside bar
  useEffect(()=>{
    dispatch(closeMenu());
  },
  )
  const [videos, setVideos]= useState([]);
    useEffect(()=>{
      getVideoData();
    },[]);
  
    const getVideoData = async ()=>{
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const videoResponse = await response.json();
      setVideos(videoResponse.items);
      console.log(videoResponse.items);
    }
  return (
    <div>
    <div className='flex flex-col'>
    <div className='pl-20 pt-8 mx-6 rounded-lg mt-12 -ml-3'>
      <iframe 
        width="640" 
        height="360" 
        src={"https://www.youtube.com/embed/"+videoCode}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ borderRadius: '15px' }}
        ></iframe>
    </div>
    <CommentsContainer />
    </div>
    {
        videos?.map((video, key)=>
          <Link to={"/watch?v="+video.id}><RecommandationCard info={video} 
                     key= {video.id} />
                     </Link>
        )
      }
    {/* <RecommandationCard /> */}
    </div>
  )
}

export default WatchPage