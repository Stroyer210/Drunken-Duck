// import React from "react";
import "./../App.css";
import { Link, useLocation } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaCocktailSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import logo2 from './logo2.png';

const Navbar = () => {
    const currentPage = useLocation().pathname;
    return (
        <div className="flex justify-between backdrop-filter-nav mx-10 2xl:mx-96 rounded-3xl mt-10 p-5 text-4xl font-bold ">
            <div className="">
                <h1 className=" text-teal-100 text-shadow inline biorhyme"><img src={logo2} alt="mylogo" className="w-20 inline mr-3"/>The Drunken Duck</h1>
            </div>
            <div className="text-white text-shadow">
                <Link to="/" className="inline mr-10 cursor-pointer"><IoHome className="inline"/></Link>
                <Link to="/Drink" className={ currentPage === "/Food"
                ? "display inline mr-10 cursor-pointer"
                : "hidden"}><LiaCocktailSolid className="inline"/></Link>
                <Link to="/Food" className={ currentPage === "/Drink"
                ? "display inline mr-10 cursor-pointer"
                : "hidden"}><IoFastFoodOutline className="inline"/></Link>
                <Link to="/Touch" className=" display inline mr-10 cursor-pointer"><FaMapLocationDot className="inline"/></Link>
            </div>

        </div>
    )
};

export default Navbar;
