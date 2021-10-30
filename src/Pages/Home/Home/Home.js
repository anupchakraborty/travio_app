import React from 'react';
import AboutTravels from '../AboutTravels/AboutTravels';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutTravels></AboutTravels>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;