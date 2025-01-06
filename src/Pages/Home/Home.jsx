import React from 'react';
import Banner from '../../Components/Banner';
import FeaturedFoods from '../../Components/FeaturedFoods';
import HowItWorks from '../../Components/HowItWorks';
import TopContributors from '../../Components/TopContributors';

const Home = () => {
    return (
        <div className='my-3'>
            <Banner />
            <FeaturedFoods />
            <HowItWorks />
            <TopContributors />
        </div>
    );
};

export default Home;