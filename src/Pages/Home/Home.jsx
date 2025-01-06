import React from 'react';
import Banner from '../../Components/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods';

const Home = () => {
    return (
        <div className='my-3'>
            <Banner />
            <FeaturedFoods />
        </div>
    );
};

export default Home;