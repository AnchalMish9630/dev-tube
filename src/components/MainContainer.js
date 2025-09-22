import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='md:ml-20 ml-0'>
      <div className='md:ml-5 ml-0 mx-1 md:mx-0 mt-16'>
      <ButtonList />
      </div>
      <div className='md:pt-2'>
      < VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer