import { USER_IMG } from "../utils/constant";

const ChatMessage = ({ userName, commentMsg }) => {
    return(
        <div className="shadow-sm p-2 flex items-center">
           <img 
            className="h-8 "
            src={USER_IMG}
            alt="user-img"
           />
           <span>{userName}</span>
           <span>{commentMsg}</span>
        </div>
    )
}
export default ChatMessage;
