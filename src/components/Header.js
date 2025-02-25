const Header = ()=>{
    return (
        <div className="grid grid-flow-col">
            <div className="flex col-span-1 pl-4">
                <img className="h-16 w-12 pt-5 pl-2"
                    alt="menu-icon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg==" alt="menu-icon" />
                <img 
                    className="h-20"
                    src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="yt-logo" />
            </div>
            <div className="col-span-10 pl-64 pt-5 justify-center">
                <input className=" w-1/2 text-center p-2  rounded-l-full  border border-gray-400" 
                        type="text" />
                <button className="py-2 px-5 rounded-r-full  border border-gray-400 bg-gray-100">Search</button>
            </div>
            <div className="col-span-1 rounded-full flex mt-5 justify-center align-items-center">
                <img className="h-12 border border-gray-200 rounded-full " 
                    src="data:image/png;base64,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" />
                <text className="pl-2 pt-3 text-lg font-semibold">Sign in</text>
            </div>
            <div></div>
        </div>
    )
}
export default Header;