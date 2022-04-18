import React from 'react';
import CetagorySection from './CetagorySection';
import AboutPhotographer from '../AboutPage/AboutPhotographer'
import LandingSection from './LandingSection';
import { useEffect, useState } from 'react';

const Home = () => {
 
    return (
        <div className='font-poppins'>
            <LandingSection></LandingSection>
            <AboutPhotographer></AboutPhotographer>
            <CetagorySection  ></CetagorySection>
            
        </div>
    );
};

export default Home;