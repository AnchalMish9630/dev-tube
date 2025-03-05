const VideoCard=({info})=>{
    const { snippet = {}, statistics = {} } = info || {};
    const {thumbnails, title, channelTitle}= snippet;
    const {viewCount} = statistics;
    return(
        <div className="p-2 m-2 w-64">
             <img  className="rounded-lg py-2"
            alt="video-thumbnail"
            src={thumbnails?.high?.url} 
           />
           <ul>
           <li className="font-bold">{title}</li>
           <li>{channelTitle}</li>
           <li>{viewCount}</li>
           </ul>
        </div>

    )
}
export default VideoCard;

export const AdVideoCard = ({info})=>{
    return(
        <div className="shadow-lg border">
            <VideoCard info={info} />
            Ad.
        </div>
    )
}