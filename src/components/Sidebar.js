import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { MdHome, MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiSolidVideos } from "react-icons/bi";
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';


const Sidebar = () => {
  const showSideBar = useSelector((store)=>store.app.isMenuOpen);
  console.log(showSideBar, "what's comming");
  return (
    
    <div className="fixed  bg-white h-screen  mt-10">
      {showSideBar ? (
        <div className="w-20 flex flex-col items-center py-5 gap-2">
        <Link to="/" className="flex flex-col items-center hover:bg-gray-200 p-3 rounded-md">
          <MdHome size={24} />
          <p className="text-xs">Home</p>
        </Link>
        <div className="flex flex-col items-center hover:bg-gray-200 p-3 rounded-md">
          <FaHistory size={24} />
          <p className="text-xs">History</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-200 p-3 rounded-md">
          <MdSubscriptions size={24} />
          <p className="text-xs">Subs</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-200 p-3 rounded-md">
          <BiSolidVideos size={24} />
          <p className="text-xs">Liked</p>
        </div>
      </div>
      ): (
        <div className="fixed bg-white top-20 h-full shadow-lg ">
          <Link to="/" className="flex items-center gap-3 pl-2 py-2 pr-8 m-3 hover:bg-gray-200 rounded-md">
            <MdHome size={24} />
            <p>Home</p>
          </Link>
          <div className="flex items-center gap-3 pl-2 py-2 pr-8 m-3 hover:bg-gray-200 rounded-md">
            <FaHistory size={24} />
            <p>History</p>
          </div>
          <div className="flex items-center gap-3 pl-2 py-2 pr-8 m-3 hover:bg-gray-200 rounded-md">
            <MdSubscriptions size={24} />
            <p>Subscriptions</p>
          </div>
          <div className="flex items-center gap-3 pl-2 py-2 pr-8 m-3 hover:bg-gray-200 rounded-md">
            <BiSolidVideos size={24} />
            <p>Liked Videos</p>
            <hr />
          </div>
        </div>
      )}
      

    </div>
  );
}

  
  
    






















//     {/* <div className="text-black font-sans font-normal text-xl cursor-pointer pt-2">
//             <div className="home   hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//             <Link to="/" className="flex  text-xl  gap-2 items-center">
//                 <MdHome size={28} />
//                 <p>Home</p>
//               </Link>
//             </div>
//             <div className="history flex  gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <FaHistory size={28} />
//               <p>History</p>
//             </div>
//             <div className="subscription flex gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <MdSubscriptions size={28} />
//               <p>Subscriptions</p>
//             </div>
//             <div className="LikedVideos flex  gap-2 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <BiSolidVideos size={28} />
//               <p>Liked Videos</p>
//             </div>
//           </div> */}
//     {/* className="z-[100] mt-12" */}
//        <div className="">
   

//       {/* <ul>
//         <Link to="/"><li className='flex flex-row'>
//         <MdHome size={28} />Home</li></Link>
//         <li>Shots</li>
//         <li>Videos</li>
//         <li>Live</li>
//       </ul>
//       <h1 className='font-bold pt-5 flex flex-row'>
//       <MdSubscriptions size={28} />Subscribtion
//       </h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul>
//       <h1 className='font-bold pt-5 flex flex-row'>
//         <FaHistory size={28} />Watch lated
//       </h1>
//       <ul>
//         <li>Music</li>
//         <li>Sports</li>
//         <li>Gaming</li>
//         <li>Movies</li>
//       </ul> */}
//     </div>
//     </div> 
//     {/* {showSideBar ? (<div className="h-screen fixed w-[14rem] top-[86px]">
//           <div className="text-black font-sans font-normal text-xl cursor-pointer pt-2">
//             <div className="home   hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <Link to='/' className="flex  text-xl  gap-2 items-center">
//                 <MdHome size={28} />
//                 <p>Home</p>
//               </Link>
//             </div>
//             <div className="history flex  gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <FaHistory size={28} />
//               <p>History</p>
//             </div>
//             <div className="subscription flex gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <MdSubscriptions size={28} />
//               <p>Subscriptions</p>
//             </div>
//             <div className="LikedVideos flex  gap-2 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <BiSolidVideos size={28} />
//               <p>Liked Videos</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="h-screen fixed w-[7rem] top-[86px] -z-10 bg-white">
//           <div className="text-black font-sans font-normal text-xs cursor-pointer pt-2">
//             <div className="home  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <Link to ='/' className="flex flex-col gap-1 items-center ">
//               <MdHome size={28} />
//               <p>Home</p></Link>
              
//             </div>
//             <div className="history flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <FaHistory size={28} />
//               <p>History</p>
//             </div>
//             <div className="subscription flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <MdSubscriptions size={28} />
//               <p>Subscriptions</p>
//             </div>
//             <div className="LikedVideos flex flex-col gap-1 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//               <BiSolidVideos size={28} />
//               <p>Liked Videos</p>
//             </div>
//           </div>
//         </div>
//       )} */}
  
//   )
//   // return (
//   //   <div className="z-[100] mt-12">
//   //     {sidebar ? (
//   //       <div className="h-screen fixed w-[14rem] top-[86px] bg-[#0f0f0f]">
//   //         <div className="text-white font-sans font-normal text-xl cursor-pointer pt-2">
//   //           <div className="home   hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <Link to='/' className="flex  text-xl  gap-2 items-center">
//   //               <MdHome size={28} />
//   //               <p>Home</p>
//   //             </Link>
//   //           </div>
//   //           <div className="history flex  gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <FaHistory size={28} />
//   //             <p>History</p>
//   //           </div>
//   //           <div className="subscription flex gap-2    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <MdSubscriptions size={28} />
//   //             <p>Subscriptions</p>
//   //           </div>
//   //           <div className="LikedVideos flex  gap-2 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <BiSolidVideos size={28} />
//   //             <p>Liked Videos</p>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     ) : (
//   //       <div className="h-screen fixed w-[7rem] top-[86px] -z-10 bg-[#0f0f0f]">
//   //         <div className="text-white font-sans font-normal text-xs cursor-pointer pt-2">
//   //           <div className="home  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <Link to ='/' className="flex flex-col gap-1 items-center ">
//   //             <MdHome size={28} />
//   //             <p>Home</p></Link>
              
//   //           </div>
//   //           <div className="history flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <FaHistory size={28} />
//   //             <p>History</p>
//   //           </div>
//   //           <div className="subscription flex flex-col gap-1    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <MdSubscriptions size={28} />
//   //             <p>Subscriptions</p>
//   //           </div>
//   //           <div className="LikedVideos flex flex-col gap-1 text-center    items-center  hover:rounded-2xl p-5 m-3 hover:bg-[#d3d1d1e1]">
//   //             <BiSolidVideos size={28} />
//   //             <p>Liked Videos</p>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     )}
//   //   </div>
//   // );
// }

export default Sidebar