import React, { useRef, useState } from 'react'
import { ValidateData } from '../utils/validateData';
import { SUPPORTED_LANG } from '../utils/constant';

export const UserLogin  = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);
    const userEmail = useRef();
    const userPassword = useRef();
    const [message, setMessage] = useState(null);
    const handleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = ()=>{
        const ValidationMsg= ValidateData(userEmail.current.value, userPassword.current.value)
        if(ValidationMsg){
            setMessage(ValidationMsg);
        }
        else{
            console.log("Successfull,............")
        }
        // console.log(userEmail.current.value, userPassword.current.value, "is set now , do work....")
    }
  return (
    <div>
         <div> 
 
                <div className="absolute">
                <img className="w-full"
                // src={BG_IMG_URL}
                alt= "bg-img"
                />
                </div>
                <form className="w-3/12 absolute my-36 mx-auto p-12 bg-[#464657] right-0 left-0 text-white rounded-lg bg-opacity-95"
                    onSubmit={(e)=>e.preventDefault()}
                    >
                    <h1 className="font-bold text-[36px]">
                        {isSignInForm ? "Sign in" : "Sign up"} 
                          </h1>
                    {!isSignInForm &&  
                     <input 
                    //  ref={name} 
                           type="text"
                           placeholder="Enter full name" 
                           className="p-4 my-4 w-full bg-[#464657] rounded-md" 
                
                     />
                    }
                    <input 
                    ref={userEmail}
                           type="text"
                           placeholder="Enter email address" 
                           className="p-4 my-4 w-full bg-[#464657] rounded-md" 
                    />
                    <input 
                     ref={userPassword}   // by this get the refrence of the input box.
                            type="password" 
                            placeholder="Enter password" 
                            className="p-4 my-4 w-full bg-[#464657] rounded-md"
                    />
                   <p className="font-bold text-lg text-white py-2">{message}</p>
                    <button 
                            className="p-4 my-6 w-full rounded-lg bg-red-700"
                             onClick={handleButtonClick}
                        >
                         {
                            isSignInForm ? "Sign in" : "Sign up" 
                        } 
                    </button>
                    <p className="py-4 cursor-pointer"
                     onClick={handleSignInForm}
                     >
                        {isSignInForm ? "New to Youtube? Sign Up now." : "Already registered? Sign in now."} 
                    </p>
                </form>
                hhhhhhhhhhhhhhhhhhh
                 <div className="" >
                       <select>
                        {
                          SUPPORTED_LANG.map((lang)=>{
                            return <option value={lang.identifier}>{lang.name}</option>
                          })
                        }
                       </select>
                        .
                        .
                        .
                      </div>
               
        </div>
    </div>
  )
}
export default UserLogin;
