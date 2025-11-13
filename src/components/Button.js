import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeComponent";

const Button = ({ name }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    // Example: navigate conditionally
    if (name === "Watch") navigate("/watch");
    else if (name === "Sign In") navigate("/sign-in");
  };

  return (
    <div>
      <button
        className="flex w-auto lg:w-[80%] md:w-[73%] [&::-webkit-scrollbar]:h-0"
        onClick={handleClick}
      >
        <div
          className={`${
            theme === "dark" ? "bg-gray-600 text-white hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
          } md:px-4 px-4 py-2 ml-3 mr-2 text-[14px] rounded-lg  active:bg-black active:text-white text-black`}
        >
          {name}
        </div>
      </button>
    </div>
  );
};

export default Button;
