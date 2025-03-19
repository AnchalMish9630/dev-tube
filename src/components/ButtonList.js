import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const listOfButton = ["All","Music","Lofi","JukeBox","Javascript","DataStructure","Cricket","Bhakti","React","Coding","Chants", "Motivation"]
  return (
    <div className='flex w-full items-center bg-white static lg:fixed lg:top-16 border-t-gray-300 h-16'>
      {
        listOfButton.map((buttonItem, index)=>
          <Button key={index} name={buttonItem}/>
        )
      }
    </div>
  )
}

export default ButtonList