import { useState , useEffect} from "react";
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
const VideoDescription = ()=>{

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
     console.log(videos[0]?.snippet?.channelTitle,"pint data");

    return(
        <div className=" ml-16 mt-2 bg-gray-200 p-4 rounded-lg">
            Hello I am VideoDescription
        </div>
    )
}
export default VideoDescription;