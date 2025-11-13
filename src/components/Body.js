import React from 'react'
import SideBar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ThemeContextProvider } from '../context/ThemeComponent'

const Body = () => {
  return (
    // <ThemeContextProvider>
    <div className=''>
      <Header />
      <SideBar />
      <Outlet />
    </div>
    // </ThemeContextProvider>
  )
}

export default Body