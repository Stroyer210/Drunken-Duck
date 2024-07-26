import "./../App.css";
// import imageHero from "./hero.avif"
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaCocktailSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Footer from './Footer';
// import logo from './logoduck.png';
import logo2 from './../images/logo2.png';


const Hero = () => {
    return (
        <div className="py-20 h-screen overflow-y-auto">
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-extrabold lg:ml-20 text-shadow biorhyme"><img src={logo2} alt="mylogo" className="w-40 lg:inline lg:mr-10 pb-10 mx-auto"/>The Drunken Duck</h1>
                <p className="text-white mx-auto w-3/6 mt-6 text-lg sm:text-2xl text-shadow">Explore our menus, read reviews, and find our location. <span className="font-bold"> We can't wait to serve you!</span></p>
            </div>
            <div className="grid grid-cols-1 lg:flex lg:justify-center text-shadow ">
                <div className="mx-auto lg:mx-10">
                    <Link to="/Food">
                    <div className="backdrop-filter p-4 w-80 md:w-96 lg:w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                        <h1 className="text-center text-4xl text-white font-extrabold h-auto">Food Menu</h1>
                        <p><IoFastFoodOutline className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                    </Link>
                </div>

                <div className="mx-auto my-10 lg:my-0 lg:mx-10">
                    <Link to="/Drink">
                    <div className="backdrop-filter p-4 w-80 md:w-96 lg:w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                    <h1 className="text-center text-4xl text-white font-extrabold h-auto">Drink Menu</h1>
                    <p><LiaCocktailSolid className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                    </Link>
                </div>

                <div className="mx-auto lg:mx-10">
                    <Link to="/Touch">
                    <div className="backdrop-filter p-4 w-80 md:w-96 lg:w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                    <h1 className="text-center text-4xl text-white font-extrabold h-auto">Get in Touch</h1>
                    <p><FaMapLocationDot className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Hero;