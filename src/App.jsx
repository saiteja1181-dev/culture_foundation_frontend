import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import Events from './components/Events';


import Footer from './components/Footer';



function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
         <Events />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}

export default App;