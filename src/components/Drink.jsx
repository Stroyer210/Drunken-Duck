import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';
import wheatBeer from "./../images/wheatBeer.jpg";
import Footer from './Footer';

const Drink = () => {
    return (
        <div className="overflow-y-auto h-screen">
            <div>
            <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10">
                <h1 className="text-center text-5xl text-white my-10 font-extrabold text-shadow tracking-widest">DRINK MENU</h1>
                <hr className="mx-10 mb-5" />
                <div className="pb-10">
                    <div className="grid grid-cols-3 gap-2 text-center mx-20">
                        <a href="#signatureApps"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter ">Beer</button></a>
                        <a href="#apps"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Cocktails</button></a>
                        <a href="#signatureSalads"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Mocktails (N/A)</button></a>
                        <a href="#signatureSalads"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Wine</button></a>
                        <a href="#signatureSalads"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Liquor</button></a>
                        <a href="#signatureSalads"><button className="w-56 h-20 mx-auto text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">N/A Beverages</button></a>
                    </div>
                    <div id="beer">
                        <hr className="mx-10 mt-5" />
                        <h2 className="text-center text-3xl text-white mt-5 mb-5 font-extrabold text-shadow tracking-widest">BEER</h2>
                        <hr className="mx-10 mb-5" />
                        <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Crop Cirle Wheat</p>
                        {/* <p className="text-center text-base text-gray-300 mb-5 font-extrabold">½ lb hand breaded, deep-fried shrimp served with signature sauce.</p> */}
                        <img src={wheatBeer} alt="wheatBeer" className="w-64 rounded-3xl m-auto" />
                        
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default Drink;