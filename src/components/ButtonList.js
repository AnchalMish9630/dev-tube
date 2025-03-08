import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const listOfButton = ["All","Music","Lofi","JukeBox","Javascript","DataStructure","Cricket","Bhakti","React","Coding","Chants", "Motivation"]
  return (
    <div className='flex flex-row'>
      {
        listOfButton.map((buttonItem, index)=>
          <Button key={index} name={buttonItem}/>
        )
      }
    </div>
  )
}

export default ButtonList