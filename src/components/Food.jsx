import "./../App.css";
// import imageHero from "./hero.avif"
import Navbar from './Navbar';
import friedShrimp from "./../images/fried-shrimp.jpg";
import tots from "./../images/tots.jpg";
import crab from "./../images/crab.jpg";
import chicken from "./../images/chicken.jpg";
import salmon from "./../images/salmon.jpg";
import Footer from './Footer';
import drunkenDuck from "./../images/drunkenDuck.jpg";
import hangoverDuck from "./../images/hangoverDuck.jpg";
import classicDuck from "./../images/classicDuck.jpg";
import buffalo from "./../images/buffalo.jpg";
import giddyUp from "./../images/giddyUp.jpg";
import steak from "./../images/steak.jpg";
import ribeye from "./../images/ribeye.jpg";
import baja from "./../images/baja.jpg";
import grouper from "./../images/grouper.jpg";
import cod from "./../images/cod.jpg";

const Food = () => {
    return (
        <div className="overflow-y-auto h-screen">
            <div>
                <Navbar />
            </div>
            <div className="backdrop-filter-nav 2xl:mx-96 mt-10 pb-10">
                <h1 className="text-center text-4xl text-white my-10 font-extrabold text-shadow">FOOD MENU</h1>
                <hr className="mx-10" />
                <div>
                    <div className="grid grid-cols-3 gap-2 text-center ">
                        <a href="#signatureApps"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter ">Signature Appetizers</button></a>
                        <a href="#apps"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Appetizers</button></a>
                        <a href="#signatureSalads"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Signature Salads</button></a>
                        <a href="#salads"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Salads</button></a>
                        <a href="#sandwich"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Sandwich Favorites</button></a>
                        <a href="#wraps"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Wraps</button></a>
                        <a href="#burgers"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Burgers</button></a>
                        <a href="#steaks"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Steaks & more</button></a>
                        <a href="#sides"><button className="mx-14 text-2xl text-white my-5 font-extrabold text-shadow border rounded-xl p-2 backdrop-filter">Side Choices</button></a>
                    </div>
                    <hr className="mx-10" />
                    <div id="signatureApps">
                        <h2 className="text-center text-3xl text-white mt-10 mb-5 font-extrabold text-shadow">Signature Appetizers</h2>
                        <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Bada Bing Shrimp</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">½ lb hand breaded, deep-fried shrimp served with signature sauce.</p>
                        <img src={friedShrimp} alt="fried-shrimp" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Loaded Tater Tots</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">¾ lb golden-brown tater tots topped with our signature queso sauce, bacon, scallions & drizzled with sour cream.</p>
                        <img src={tots} alt="tots" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Crab Cakes</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Hand pattied and grilled golden brown served with homemade remoulade sauce.</p>
                        <img src={crab} alt="crab" className="w-64 rounded-3xl m-auto" />
                    </div>
                    <hr className="mx-60 mt-5" />
                    <div id="apps">
                        <h2 className="text-center text-3xl text-white mt-5 mb-5 font-extrabold text-shadow">Appetizers</h2>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cheese Curds</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Onion Rings</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chicken Strips</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Bavarian Pretzel</p>
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="signatureSalads">
                        <h2 className="text-center text-3xl text-white mt-10 mb-5 font-extrabold text-shadow">Signature Salads</h2>
                        <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Chicken Cranberry Salad</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled Chicken on a bed of mixed greens, with dried cranberries, scallions, Parmesan cheese, candied almonds & Balsamic vinaigrette.</p>
                        <img src={chicken} alt="chicken" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Blackened Salmon Salad</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Mixed greens topped with blackened salmon*, red onions, tomatoes, cucumbers, fresh mushrooms & croutons.</p>
                        <img src={salmon} alt="salmon" className="w-64 rounded-3xl m-auto" />
                    </div>
                    <hr className="mx-60 mt-5" />
                    <div id="salads">
                        <h2 className="text-center text-3xl text-white mt-5 mb-5 font-extrabold text-shadow">Salads</h2>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chicken Ceasar Salad</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled chicken, romaine lettuce tossed with parmesan cheese, ceasar dressing & croutons.</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cobb Salad</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Iceberg lettuce topped with rows of grilled chicken, bacon, crumbled bleu cheese, red onions, cheddar, tomatoes & hard boiled eggs.</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Chef Salad</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Iceberg lettuce, topped with deli ham, turkey, red onions, tomato, green peppers, cheese & egg.</p>
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="sandwich">
                        <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">Sandwich Favorites</h2>
                        <p className="text-center text-base text-gray-200 mb-6 font-extrabold">Served with Fries – Sub Cheese Curds or Waffle Fries for $2.50</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Clubhouse Sandwich</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Bacon, Lettuce & Tomato</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Grilled Chicken Sandwich</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Hand Breaded Walleye</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Irish Ruben</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Grilled Salmon Sandwich</p>
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="wraps">
                        <h2 className="text-center text-3xl text-white mt-10 mb-5 font-extrabold text-shadow">Wraps</h2>
                        <p className="text-center text-xl text-white mb-2 font-extrabold text-shadow">Southwest Chicken Wrap</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled chicken, pepper jack cheese, lettuce, Pico de Gallo & crispy tortilla strips with zesty salsa ranch.</p>
                        <img src={friedShrimp} alt="fried-shrimp" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Chicken Caesar Wrap</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Grilled chicken breast, crisp romaine lettuce, shaved Parmesan cheese, and creamy Caesar dressing, all wrapped in a soft flour tortilla.</p>
                        <img src={tots} alt="tots" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-10 mb-2 font-extrabold text-shadow">Steakhouse Prime Wrap</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Fresh shaved prime rib dressed in a creamy steak sauce with crispy fried onions, lettuce, tomato & cheddar cheese.</p>
                        <img src={crab} alt="crab" className="w-64 rounded-3xl m-auto" />
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="burgers">
                        <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">100% Certified Angus Beef Burgers</h2>
                        <p className="text-center text-base text-gray-200 mb-6 font-extrabold">Served with Fries – Sub Cheese Curds or Waffle Fries for $2.50</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Drunken Duck Burger*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">2 patties topped with bacon, ham, shredded chicken, swiss & cheddar cheese.</p>
                        <img src={drunkenDuck} alt="drunkenDuck burger" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Hangover Duck Burger*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Fried egg, hash browns, bacon & cheddar cheese.</p>
                        <img src={hangoverDuck} alt="hangoverDuck burger" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">The Classic Duck Burger*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Choice of cheese, topped with lettuce, tomato, onions & pickles.</p>
                        <img src={classicDuck} alt="classicDuck burger" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Buffalo Burger*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Pepper jack cheese, buffalo sauce, chipotle mayo, jalapenos & topped with crispy onions.</p>
                        <img src={buffalo} alt="buffalo burger" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Giddy Up Burger*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Topped with BBQ sauce, cheddar cheese, strips of bacon & a golden brown onion ring.</p>
                        <img src={giddyUp} alt="giddyUp burger" className="w-64 rounded-3xl m-auto" />
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="steaks">
                        <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">Steaks & More</h2>
                        <p className="text-center text-base text-gray-200 mb-6 font-extrabold">Served with two sides</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Steak Sandwich*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Bacon wrapped queen filet tenderloin, with lettuce and chimichurri ranch.</p>
                        <img src={steak} alt="steak" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Ribeye Sandwich*</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">8 oz hand cut ribeye.</p>
                        <img src={ribeye} alt="ribeye" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Baja Fish Tacos</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Cajun spiced & deep-fried Atlantic Cod, topped with citrus slaw, Pico de Gallo & cilantro lime sauce.</p>
                        <img src={baja} alt="baja fish tacos" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Grilled Grouper Tacos</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">2 tacos topped with citrus slaw, Pico de Gallo & cilantro lime sauce.</p>
                        <img src={grouper} alt="grilled grouper tacos" className="w-64 rounded-3xl m-auto" />
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Atlantic Cod</p>
                        <p className="text-center text-base text-gray-300 mb-5 font-extrabold">Perfectly seared and served with roasted seasonal vegetables, buttery mashed potatoes, and a zesty lemon herb sauce.</p>
                        <img src={cod} alt="atlantic cod" className="w-64 rounded-3xl m-auto" />
                    </div>
                    <hr className="mx-10 mt-10" />
                    <div id="sides">
                        <h2 className="text-center text-3xl text-white mt-5 mb-2 font-extrabold text-shadow">Side Choices</h2>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Fries</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Tater Tots</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Applesauce</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Coleslaw</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Mashed potatoes</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Kettle Chips</p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Baked Potato <span className="text-sm">($2.50 extra)</span></p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Cheese Curds <span className="text-sm">($2.50 extra)</span></p>
                        <p className="text-center text-xl text-white mt-5 mb-2 font-extrabold text-shadow">Mac And Cheese <span className="text-sm">($2.50 extra)</span></p>
                    </div>
                    <hr className="mx-10 mt-10" />
                    <p className="text-center text-sm text-gray-200 my-6 font-extrabold">*Whether dining out or preparing food at home, consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food borne illness.</p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Food;