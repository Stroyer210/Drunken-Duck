// import React from "react";
import "./../App.css";


const Navbar = () => {
    return (
        <div className="flex justify-between bg-gray-500 mx-10 2xl:mx-96 rounded-3xl mt-10 p-5 text-4xl font-bold">
            <div className="">
                <h1 className=" text-yellow-400 inline ">ServeDin</h1>
            </div>
            <div className="text-white">
                <a className="inline mr-10 cursor-pointer">Home</a>
                <a className="inline mr-10 cursor-pointer">Menu</a>
                <a className="inline mr-10 cursor-pointer">Contact</a>
            </div>

        </div>
    )
};

export default Navbar;
