import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import RecommandationCard from "./RecommandationCard";
import VideoDescription from "./VideoDescription";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Button from "./Button";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const videoCode = searchParam.get("v");
  const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const videoResponse = await response.json();
    setVideos(videoResponse.items);
    console.log(videoResponse.items);
  };
  console.log(videos[0]?.snippet?.channelTitle, "pint data");

  // why use effect me dala h closeside bar
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4">
      <div className="flex-grow lg:w-[60%]">
        <div className="pl-20 pt-8 rounded-lg mt-12 -ml-3">
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoCode}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ borderRadius: "15px" }}
          ></iframe>
        </div>
        <div className=" ml-16 mt-4 ">
          <div className="text-lg font-bold w-[650px] whitespace-pre-wrap pb-3">
            {videos[0]?.snippet?.localized?.title}
          </div>
          <div className="flex w-[650px] items-start">
            <img
              className="h-8 border border-gray-200 rounded-full mt-2"
             src="data:image/png;base64,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"
            />
            <div className="ml-2">
              <div>{videos[0]?.snippet?.channelTitle}</div>
              <div className="text-xs">1.84M subscribers</div>
            </div>
            <button className="bg-black text-white text-sm font-bold rounded-full hover:bg-slate-700 py-2 px-3 ml-4 mt-1">
              Subscribe
            </button>
            <Button name="Share" />
          </div>
        </div>

        <VideoDescription />
        <CommentsContainer />
      </div>

    
<div className="flex-grow h-[500px] mt-12 border border-gray-300 rounded-lg overflow-y-scroll bg-white">
        <p className="font-semibold p-2 border-b">Live Chat</p>
        <LiveChat />
      </div>

      {/* Recommendation section (optional) */}
      {/* <div className="mt-20 lg:w-96 flex flex-col lg:mt-20">
        {videos?.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <RecommandationCard info={video} />
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default WatchPage;
