import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Brand from '../components/Brand';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const HomePage = (props) => {
    return (
        <>
            <Home />
            <About />
            <Brand />
            <Features />
            <Portfolio />
            <Testimonial />
            <Newsletter />
            <Footer />
        </>
    );
}

export default HomePage;