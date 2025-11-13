import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link, useLocation } from "react-router-dom";
import { MdHome, MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeComponent";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  const {theme } = useContext(ThemeContext);

  const items = [
    { icon: <MdHome size={24} />, label: "Home", path: "/" },
    { icon: <FaHistory size={24} />, label: "History", path: "/history" },
    { icon: <MdSubscriptions size={24} />, label: "Subscriptions", path: "/subs" },
    { icon: <BiSolidVideos size={24} />, label: "Videos", path: "/videos" },
  ];

  return (
    <>
      {/* 💻 Desktop Sidebar (toggleable) */}
      {isMenuOpen && (
        <>
          {/* Overlay for Desktop */}
          <div
            className={`hidden md:block fixed inset-0  bg-opacity-30 z-40
               
            `}
            onClick={() => dispatch(toggleMenu())}
          />
          <div
            className={`
             ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}
              hidden md:flex flex-col fixed top-14 left-0 w-60 h-[calc(100%-3.5rem)] 
              shadow-lg z-50
            `}
          >
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className={`flex items-center px-4 py-2  
                  ${theme === "dark" ? "hover:bg-gray-600 text-white" : "hover:bg-gray-100"}
                  ${location.pathname === item.path ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* 📱 Mobile Bottom Nav (Always visible) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white shadow-inner flex justify-around items-center z-50">
        {items.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex flex-col items-center text-xs ${
              location.pathname === item.path ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            {item.icon}
            <span className="text-[10px]">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
