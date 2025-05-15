import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
// import { lang } from '../utils/languageConst';
import { LANGUAGE_KEYS } from '../utils/i18n/languageKeys';
import { lang } from '../utils/i18n';


const ButtonList = () => {
   const tranlaation = useSelector((store)=>{
    return store.config.lang
  })
  // const listOfButton = [
  //   "all",
  //   "music",
  //   "lofi",
  //   "jukeBox",
  //   "javascript",
  //   "dataStructure",
  //   "Cricket",
  //   "bhakti",
  //   "react",
  //   "coding",
  //   "chant",
  //   "motivation"
  // ];
  const listOfButtons = [
    LANGUAGE_KEYS.ALL,
    LANGUAGE_KEYS.MUSIC,
    LANGUAGE_KEYS.LOFI,
    LANGUAGE_KEYS.JUKEBOX,
    LANGUAGE_KEYS.JAVASCRIPT,
    LANGUAGE_KEYS.DATA_STRUCTURE,
    LANGUAGE_KEYS.CRICKET,
    LANGUAGE_KEYS.BHAKTI,
    LANGUAGE_KEYS.REACT,
    LANGUAGE_KEYS.CODING,
    LANGUAGE_KEYS.CHANT,
    LANGUAGE_KEYS.MOTIVATION,
  ];
  console.log(tranlaation, "helloreducers:")
  return (
    <div className='flex w-full items-center bg-white static lg:fixed lg:top-16 border-t-gray-300 h-16'>
      {
        listOfButtons.map((buttonItem, index)=>
          <Button key={index} name={lang[tranlaation]?.[buttonItem] || buttonItem}/>
        )
      }
    </div>
  )
}

export default ButtonList