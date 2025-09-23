const VideoCard = ({ info }) => {
  const { snippet = {}, statistics = {} } = info || {};
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  const formatViews = (count) => {
    if (count >= 1e9) return (count / 1e9).toFixed(1) + "B";
    if (count >= 1e6) return (count / 1e6).toFixed(1) + "M";
    if (count >= 1e3) return (count / 1e3).toFixed(1) + "K";
    return count;
  };

  return (
    <div className="p-2 mx-1 ">
      <div className="w-[90vw]  md:w-[27vw] font-sans">
        <img
          className="object-cover w-full h-[180px]  md:h-[208px] rounded-xl hover:rounded-none"
          alt="video-thumbnail"
          src={thumbnails?.high?.url}
        />
        <ul className="flex flex-col mt-2 justify-between">
          <li className="text-sm  font-semibold">{title}</li>
          <li className="text-sm  text-gray-500">{channelTitle}</li>
          <li className="text-sm  text-gray-500">
            {formatViews(Number(viewCount))} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;

export const AdVideoCard = ({info})=>{
    return(
        <div className="shadow-lg border">
            <VideoCard info={info} />
            Ad.
        </div>
    )
}