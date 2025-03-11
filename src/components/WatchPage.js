import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {closeMenu} from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
  const [searchParam, setSearchParam]= useSearchParams();
  const videoCode = searchParam.get("v")
  const dispatch = useDispatch();
  
  // why use effect me dala h closeside bar
  useEffect(()=>{
    dispatch(closeMenu());
  },
  )
  return (
    <div className='flex flex-col'>
    <div className='pl-20 pt-8 mx-6 rounded-lg'>
      <iframe 
        width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/"+videoCode}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ borderRadius: '15px' }}
        ></iframe>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage