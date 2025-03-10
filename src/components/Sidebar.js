import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const showSideBar = useSelector((store)=>store.app.isMenuOpen);
  if(!showSideBar) return null;
  return (

    <div className='p-5 w-48 shadow-lg'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shots</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Subscribtion
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>
        Watch lated
      </h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar