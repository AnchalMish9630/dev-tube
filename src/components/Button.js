const Button = ({name}) =>{
    return(
        <div>
            <button className="flex w-auto lg:w-[80%] md:w-[73%]  [&::-webkit-scrollbar]:h-0">
            {/* > */}
              <div className="px-5 bg-gray-100 m-2 rounded-lg py-2  hover:bg-gray-200 active:bg-black active:text-white text-black">{name}</div>
               {/* {name} */}
            </button>
        </div>
    )
}
export default Button;