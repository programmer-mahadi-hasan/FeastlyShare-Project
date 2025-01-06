import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/slider_1.jpeg';
import slider2 from '../assets/slider_2.jpeg';
import slider3 from '../assets/slider_3.jpeg';
import slider4 from '../assets/slider_4.jpeg';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};

const Banner = () => {
    return (
        <Slider {...settings} className="h-[calc(100vh-80px)] w-full mx-auto overflow-hidden">
            <div className="relative h-screen">
                <img className="object-cover w-full h-full" src={slider1} alt="Food Sharing" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-orange-500 mb-4">Sharing is Caring</h1>
                    <p className="text-xl text-white mb-6">Join hands to share meals and smiles in your community.</p>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Food Menu
                    </button>
                </div>
            </div>
            <div className="relative h-screen">
                <img className="object-cover w-full h-full" src={slider2} alt="Community Sharing" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-orange-500 mb-4">Share with Your Community</h1>
                    <p className="text-xl text-white mb-6">Build stronger bonds by sharing meals with those around you.</p>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Food Menu
                    </button>
                </div>
            </div>
            <div className="relative h-screen">
                <img className="object-cover w-full h-full" src={slider3} alt="Food Connections" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-orange-500 mb-4">Connecting Through Food</h1>
                    <p className="text-xl text-white mb-6">Create moments of joy and connection by sharing meals.</p>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Food Menu
                    </button>
                </div>
            </div>
            <div className="relative h-screen">
                <img className="object-cover w-full h-full" src={slider4} alt="Share the Love" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-orange-500 mb-4">Share the Love</h1>
                    <p className="text-xl text-white mb-6">Spread happiness by giving the gift of delicious food.</p>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Food Menu
                    </button>
                </div>
            </div>
        </Slider>
    );
};

export default Banner;
