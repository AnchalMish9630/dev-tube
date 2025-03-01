import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos]= useState([]);
  useEffect(()=>{
    getVideoData();
  },[]);

  const getVideoData = async ()=>{
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const videoResponse = await response.json();
    setVideos(videoResponse.items);
  }
  return (
    <div className='flex flex-wrap ml-8 mr-8' >
      {
        videos?.map((video, key)=>
          <Link to={"/watch?v="+video.id}><VideoCard info={video} 
                     key= {video.id} />
                     </Link>
        )
      }
    
    </div>
  )
}

export default VideoContainer