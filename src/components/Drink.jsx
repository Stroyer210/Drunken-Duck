import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';


const Drink = () => {
    return (
        <div className=" my-20  ">
            <div>
            <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10">
                <h1 className="text-center text-2xl text-white my-10">This is the Drink menu</h1>
            </div>
        </div>
    )
};

export default Drink;