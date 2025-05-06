import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { lang } from '../utils/i18n';
import { FaHistory } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { toggleMenu } from '../utils/appSlice'; // Import the action that toggles the menu
import { LANGUAGE_KEYS } from '../utils/i18n/languageKeys';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  const location = useLocation();
  const isWatchPage = location.pathname.includes('/watch');
  const langCode = useSelector((store)=>store.config.lang)

  const menuItem = [
    { icon : <MdHome size={24} />, lable: lang[langCode][LANGUAGE_KEYS.HOME], link: '/' },
    { icon : <FaHistory size={24} />, lable: lang[langCode][LANGUAGE_KEYS.HISTORY], link: '/' },
    { icon : <MdSubscriptions size={24} />, lable: lang[langCode][LANGUAGE_KEYS.SUBSCRIPTION], link: '/' },
    { icon : <BiSolidVideos size={24} />, lable: lang[langCode][LANGUAGE_KEYS.LIKED_VIDEOS], link: '/' },
  ]
  const sideBarItem = [
    { icon : <MdHome size={24} />, lable: lang[langCode][LANGUAGE_KEYS.HOME], link: '/' },
    { icon : <FaHistory size={24} />, lable: lang[langCode][LANGUAGE_KEYS.HISTORY], link: '/' },
    { icon : <MdSubscriptions size={24} />, lable: lang[langCode][LANGUAGE_KEYS.SUBSCRIPTION], link: '/' },
    { icon : <BiSolidVideos size={24} />, lable: lang[langCode][LANGUAGE_KEYS.LIKED_VIDEOS], link: '/' },
  ]


  const closeMenu = () => {
    dispatch(toggleMenu());
  };

  if (isWatchPage && !isMenuOpen) return null;

  return (
    <>
      {/* Overlay for background shading */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed bg-white h-screen mt-16 transition-all duration-300 z-50 ${isMenuOpen ? 'w-60' : 'w-20'} shadow-lg`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
      >
        {isMenuOpen ? (
          <div className="flex flex-col items-start py-5 gap-2">
            {sideBarItem.map((item)=>
            <Link to="/" className="flex items-center gap-3 pl-2 py-2 pr-8 m-3 hover:bg-gray-200 rounded-md">
              {item.icon}
            <p>{item.lable}</p>
            </Link>
            )}  
          </div>
        ) : (
          <div className="w-20 flex flex-col items-center py-5 gap-2">
             {
              menuItem.map((item)=>
              <Link to="/" className="flex flex-col items-center hover:bg-gray-200 p-3 rounded-md ">
                {item.icon}
              <p className="text-[10px]">{item.lable}</p>
            </Link>
              )
            }
            </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
