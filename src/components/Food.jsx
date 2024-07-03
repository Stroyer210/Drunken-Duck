import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';
import friedShrimp from "./fried-shrimp.jpg";
import tots from "./tots.jpg";
import crab from "./crab.jpg";

const Food = () => {
    return (
        <div className=" overflow-y-auto h-screen ">
            <div>
            <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10">
                <h1 className="text-center text-4xl text-white my-10 font-extrabold text-shadow">FOOD MENU</h1>
                <hr className="mx-10"/>
                <div>
                    <h1 className=" ml-20 text-3xl text-white my-5 font-extrabold text-shadow">Appetizers & Salads</h1>
                    <hr className="mx-10 "/>
                    <h2 className="text-center text-2xl text-white mt-10 mb-5 font-extrabold text-shadow">Signature Appetizers</h2>
                    <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Bada Bing Shrimp</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold ">½ lb hand breaded, deep-fried shrimp served with signature sauce.</p>
                    <img src={friedShrimp} alt="fried-shrimp" className="w-64 rounded-3xl m-auto"/>
                    <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Loaded Tater Tots</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold ">¾ lb golden-brown tater tots topped with our signature queso sauce, bacon,  scallions & drizzled with sour cream.</p>
                    <img src={tots} alt="tots" className="w-64 rounded-3xl m-auto"/>
                    <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Crab Cakes</p>
                    <p className="text-center text-base text-gray-300 mb-5 font-extrabold ">Hand pattied and grilled golden brown served with homemade remoulade sauce.</p>
                    <img src={crab} alt="crab" className="w-64 rounded-3xl m-auto"/>
                </div>
            </div>
        </div>
    )
};

export default Food;