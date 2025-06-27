import React from 'react';
import Swiper from '../Components/Swiper';
import Blogs from '../Components/Blogs';
import Pricing from '../Components/Pricing';
import NewPlant from '../Components/NewPlant';
import PlantCareTips from '../Components/PlantCareTips';

const Home = () => {
    return (
        <div>
            <Swiper></Swiper>
            <NewPlant></NewPlant>
            <Blogs></Blogs>
            <PlantCareTips></PlantCareTips>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;