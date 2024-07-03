// import React from "react";
import "./../App.css";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const currentPage = useLocation().pathname;
    return (
        <div className="flex justify-between backdrop-filter-nav mx-10 2xl:mx-96 rounded-3xl mt-10 p-5 text-4xl font-bold ">
            <div className="">
                <h1 className=" text-teal-100 text-shadow inline biorhyme">The Drunken Duck</h1>
            </div>
            <div className="text-white text-shadow">
                <Link to="/" className="inline mr-10 cursor-pointer">Home</Link>
                <Link to="/Drink" className={ currentPage === "/Food"
                ? "display inline mr-10 cursor-pointer"
                : "hidden"}>Drink</Link>
                <Link to="/Food" className={ currentPage === "/Drink"
                ? "display inline mr-10 cursor-pointer"
                : "hidden"}>Food</Link>
                <Link to="/Touch" className="inline mr-10 cursor-pointer">Contact</Link>
            </div>

        </div>
    )
};

export default Navbar;
