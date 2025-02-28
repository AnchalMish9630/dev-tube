import React from 'react'
import SideBar from './Sidebar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex '>
      <SideBar />
      <MainContainer />
    </div>
  )
}

export default Body