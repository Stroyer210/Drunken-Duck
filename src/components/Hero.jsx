import "./../App.css";
import imageHero from "./hero.avif"


const Hero = () => {
    return (
        <div className="flex justify-center my-20  ">
            <div className="">
                <img src={imageHero} alt="Food-image" width={500} height={500} className="box rounded-xl ml-10 "/>
            </div>
            <div className="w-1/3 font-bold">
                <h1 className="text-4xl text-yellow-400 ml-20">A Feast for the Senses</h1>
                <h1 className="text-4xl text-gray-800 ml-20">"Experience dining like never before with our exquisite menu and ambiance."</h1>
            </div>

        </div>
    )
};

export default Hero;