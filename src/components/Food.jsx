import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';


const Food = () => {
    return (
        <div className=" my-20  ">
            <div>
            <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10">
                <h1 className="text-center text-2xl text-white my-10">This is the Food menu</h1>
            </div>
        </div>
    )
};

export default Food;