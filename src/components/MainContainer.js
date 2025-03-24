import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='ml-20'>
      <div className='ml-5'>
      <ButtonList />
      </div>
      < VideoContainer />
    </div>
  )
}

export default MainContainer