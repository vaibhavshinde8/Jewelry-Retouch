import React from 'react';
import Navbar from './components/Hero';
import Header from './components/Navbar';
import JewelryServices from "./components/JewelryServices";
import PhotoSolutions from "./components/PhotoSolutions";
import Retouching from "./components/Retouching";
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import TestimonialSlider from './components/Testimonial';
import FreeTrialForm from './components/FreeTrial';
import Footer from './components/Footer';
import Last from './components/Last';
import './App.css'

const App = () => {
  return (
     <>
      <Header />
      <Navbar />
      <JewelryServices />
      <PhotoSolutions />
      <Retouching />
      {/* <JewelryService /> */}
      <WhyChooseUs />
      <Portfolio/>
      <FAQ />
      <TestimonialSlider/>
      <FreeTrialForm/>
      <Footer/>
      <Last/>
      </>
  );
};

export default App;

