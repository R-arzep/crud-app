import React from 'react'
const SideBar = (props) => 
{
    const sideBar = 
    <div className="hidden w-4/6 lg:block xl:w-1/2  row-start-2 row-span-2 pt-16 font-extrabold font-rubi">
        <div className="flex flex-col ml-10">
            <a href="#" className=" text-lg text-gray-500 mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">Discover</a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">Home</a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">Browse</a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">Recommendations</a>
        </div>
        <div className="flex flex-col ml-10 ">
            <a href="#" className="text-lg text-gray-500 mb-4 hover:bg-black hover:text-white py-2 px-6 rounded-full">Library </a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">My Follows</a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">My Favorites</a>
            <a href="#" className="text-base xl:text-lg mb-2 hover:bg-black hover:text-white py-2 px-6 rounded-full">My Recipes</a>
        </div>
    </div>;
    return sideBar;
}
export default SideBar;