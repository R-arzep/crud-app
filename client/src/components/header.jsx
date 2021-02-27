import React from 'react'

const Header = (props) =>
{
    const header = 
    <div className=" col-span-3 font-rubi flex justify-end content-center py-4 border-b-2 border-gray-100">
        <a href="#" className="mx-auto font-black text-5xl lg:ml-16 lg:mr-auto lg:justify-self-start "><h1 >KitchenHeaven</h1></a>
        <a href="#"><img src={props.img} className="hidden lg:block w-8 h-8 mt-2 mr-6 rounded-full" alt="Profile Picture" /></a>
        <a href="#"><h3 className="hidden font-bold text-lg lg:block  py-2 mr-20 xl:mr-40 " >{props.name}</h3></a>
    </div>;
    return header;
}
export default Header;