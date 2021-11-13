import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Products></Products>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;