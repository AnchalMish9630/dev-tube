import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { MENU_ICON, SUPPORTED_LANG, USER_IMG, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import { lang } from "../utils/i18n";
import { changeLang } from "../utils/configSlice";
import { LANGUAGE_KEYS } from "../utils/i18n/languageKeys";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionResult, setSuggestionResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  
  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const langCode = useSelector((store)=>store.config.lang)

  // const getSearchSuggestion = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const jsonData = await data.json();
  //   console.log("data is searched", jsonData[1]);
  //   if (jsonData && jsonData[1]) {
  //     setSuggestionResult(jsonData[1]); // Update local suggestion result
  //     dispatch(cacheResult({ [searchQuery]: jsonData[1] }));
  //   }
  // };

  // useEffect(() => {
  //   {
  //     if (searchCache[searchQuery]) {
  //       setSuggestionResult(searchCache[searchQuery]);
  //     } else {
  //       const timer = setTimeout(() => getSearchSuggestion(), 200);
  //       return () => {
  //         clearTimeout(timer);
  //       };
  //     }
  //   }
  // }, [searchQuery, searchCache]); // Trigger whenever searchQuery or searchCache changes

  return (
    <div className=" flex w-full justify-between items-center md:px-6 font-semibold px-1 static z-20 lg:fixed bg-white md:border-none border-b border-gray-200">
      <div className="w-[10rem] flex flex-nowrap">
        <img
          className="hidden md:inline-block w-9 h-12 pt-4 cursor-pointer"
          onClick={() => handleToggleMenu()}
          alt="menu-icon"
           src={MENU_ICON} 
        />
        <a href="/">
          <img
            className="md:w-28 md:h-16 w-25 h-14 block cursor-pointer"
            src={YOUTUBE_LOGO}
            alt="yt-logo"
          />
        </a>
      </div>
      <div className="hidden md:flex flex-nowrap">
        <div>
          <input
            className=" border focus:outline-blue-200 border-gray-400 rounded-l-full p-4 h-10 lg:w-[30rem] [@media(max-width:768px)]:w-[10rem] md:w-[15rem]"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full w-16 h-10  bg-gray-200 text-center cursor-pointer">
            {lang[langCode].search}
          </button>
        </div>
        

        {showSuggestion && (
          <div className="fixed bg-white border border-gray-200 py-2 px-5 w-96 shadow-lg rounded-lg mt-10  lg:w-[30rem] [@media(max-width:768px)]:w-[10rem] md:w-[15rem]" >
            <ul>
              {suggestionResult &&
                suggestionResult.map((suggestion, index) => (
                  <li className="shadow-sm py-2" key={index}>
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}


      </div>
      <div className="md:hidden flex ml-24 px-2">
  <button className="text-gray-700 p-2">
    <FaSearch size={20} />
  </button>
</div>
      <div className="hidden md:flex flex-col" >
       <select onChange={handleLanguageChange}>
        {
          SUPPORTED_LANG.map((lang)=>{
           return  <option value={lang.identifier}>{lang.name}</option>
          })
        }
       </select>
      </div>
      <button 
        // onClick={()=>{navigate("/watch")
        //   // navigate("/browse");
        // }}
        className="hidden md:flex justify-between items-center flex-nowrap border border-gray-200 rounded-full cursor-pointer hover:bg-blue-100">
        <img
          className="h-8 pl-2 "
          src={USER_IMG}
          />
        <text className="hidden md:inline-block pr-2 py-2 rounded-full h-10 m-2 ">
          {lang[langCode][LANGUAGE_KEYS.SIGN_IN]}
        </text>
      </button>
      <div></div>
    </div>
  );
};

export default Header;
