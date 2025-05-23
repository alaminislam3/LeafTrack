import React from 'react';
import Swiper from '../Components/Swiper';
import Blogs from '../Components/Blogs';
import Pricing from '../Components/Pricing';
import NewPlant from '../Components/NewPlant';

const Home = () => {
    return (
        <div>
            <Swiper></Swiper>
            <NewPlant></NewPlant>
            <Blogs></Blogs>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;