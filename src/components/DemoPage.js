import React, { useState } from 'react'

const DemoPage = () => {

  const [text, setText] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("rendering.." + text)
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
         return false;
        }
      }
      return true;
     }
    
     //Function to find the nth prime number
     function findNthPrime(n) {
      let count = 0;
      let num = 2;
      while (count < n) {
        if (isPrime(num)) {
         count++;
        }
        num++;
      }
      return num - 1;
     }
  
  const prime = findNthPrime(text);
  return (
    <div className={`my-20 mx-40 p-8 w-96 h-96 border border-black ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      <div>
      <button className="m-10 p-2 bg-green-200" 
  onClick={() => {
    setIsDarkTheme(!isDarkTheme);
  }}
>
  Click me
</button>

      </div>
      <div>
      <input 
      className='pt-40 border border-black w-72'
      type="number" value={text} onChange={(e)=>setText(e.target.value)} />
      <input 
      className='pt-4 mt-4 border border-black w-72'
      type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      </div>
      <div>
        <h1>
        nth prime : {prime}
        </h1> </div>
      
    </div>

  )
}

export default DemoPage;