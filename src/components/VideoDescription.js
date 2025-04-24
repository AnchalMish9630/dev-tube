import { useState , useEffect} from "react";
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
const VideoDescription = ()=>{
  
    const [videos, setVideos]= useState([]);
  const [showFull, setShowFull] = useState(false);
  useEffect(()=>{
    getVideoData();
  },[]);

  const getVideoData = async ()=>{
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const videoResponse = await response.json();
    setVideos(videoResponse.items);
  };

  const formatNumber = (num) => Number(num)?.toLocaleString();

  const description = videos[0]?.snippet?.description || "";
  const lines = description.split("\n");

  const shortDescription = lines.slice(0, 2).join("\n");

  return(
    <div className=" ml-16 mt-2 bg-gray-200 p-4 rounded-lg w-[650px]">
        {formatNumber(videos[0]?.statistics?.viewCount) } views {videos[0]?.snippet?.publishedAt}
      <p className="whitespace-pre-line">
        
        {showFull ? description : shortDescription}</p>
      
      {lines.length > 2 && (
        <button 
          onClick={() => setShowFull(!showFull)} 
          className="text-black font-bold mt-1 cursor-pointer"
        >
          {showFull ? "Show less" : "...more"}
        </button>
      )}
    </div>
  );
};

export default VideoDescription;
