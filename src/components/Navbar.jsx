// import React from "react";
import "./../App.css";


const Navbar = () => {
    return (
        <div className="flex justify-between bg-gray-200 mx-96 rounded-2xl mt-10 p-5 text-4xl font-bold">
            <div className="">
                <h1 className=" text-yellow-400 inline ">ServeDin</h1>
            </div>
            <div className="">
                <h1 className="inline mr-10">Home</h1>
                <h1 className="inline mr-10">Menu</h1>
                <h1 className="inline mr-10">Contact</h1>
            </div>

        </div>
    )
};

export default Navbar;
