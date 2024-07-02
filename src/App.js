import './App.css';
import './custom.css';
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import React from "react";

function App() {

  return (
    <div className="">
      <header className="">
        {/* <Navbar className='sticky top-0 z-50'/> */}
      </header>
      <main>
        <Hero className='h-dvh'/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
