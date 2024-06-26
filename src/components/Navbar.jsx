// import React from "react";
import "./../App.css";


const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className="">
                <h1 className="text-4xl text-yellow-400 inline">hello</h1>
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
