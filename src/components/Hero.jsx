import "./../App.css";
// import imageHero from "./hero.avif"
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaCocktailSolid } from "react-icons/lia";
import { FaMapLocationDot } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className=" my-20  ">
            <div className="text-center mb-10">
                <h1 className="text-7xl text-white font-extrabold ml-20 text-shadow biorhyme">The Drunken Duck</h1>
                <p className="text-white mx-auto w-3/6 mt-6 text-2xl text-shadow">Explore our menus, read reviews, and find our location. <span className="font-bold"> We can't wait to serve you!</span></p>
            </div>
            <div className="flex justify-center text-shadow">
                <div className="mx-10">
                    <div className="backdrop-filter p-4 w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                        <h1 className="text-center text-4xl text-white font-extrabold h-auto">Food</h1>
                        <p><IoFastFoodOutline className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                </div>
                <div className="mx-10">
                    <div className="backdrop-filter p-4 w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                    <h1 className="text-center text-4xl text-white font-extrabold h-auto">Drinks</h1>
                    <p><LiaCocktailSolid className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                </div>
                <div className="mx-10">
                    <div className="backdrop-filter p-4 w-72 py-32 border-solid border-4 border-gray-700 rounded-2xl cursor-pointer" >
                    <h1 className="text-center text-4xl text-white font-extrabold h-auto">Get in Touch</h1>
                    <p><FaMapLocationDot className="text-4xl text-white mx-auto my-3 font-bold"/></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;