import "./../App.css";
import imageHero from "./hero.avif"


const Hero = () => {
    return (
        <div className="flex justify-center my-20  ">
            <div className="">
                <img src={imageHero} alt="Food-image" width={500} height={500} className="rounded-xl ml-10"/>
            </div>
            <div className="">
                <h1 className="text-4xl text-yellow-400 inline ml-20">This is where the Hero goes</h1>
            </div>

        </div>
    )
};

export default Hero;