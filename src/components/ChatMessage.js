import { USER_IMG } from "../utils/constant";

const ChatMessage = ({ userName, commentMsg }) => {
    return(
        <div className="shadow-sm p-2 flex items-center hover:bg-gray-200 hover:cursor-pointer ">
           <img 
            className="h-8 "
            src={USER_IMG}
            alt="user-img"
           />
           <span className="text-gray-600 font-semibold text-[14px] pr-3">{userName}</span>
           <span className="font-normal text-[12px]">{commentMsg}</span>
        </div>
    )
}
export default ChatMessage;
