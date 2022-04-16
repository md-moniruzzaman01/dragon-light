import React from 'react';
import CetagorySection from './CetagorySection';
import CourseSection from './CourseSection';
import LandingSection from './LandingSection';
import { useEffect, useState } from 'react';

const Home = () => {
 
    return (
        <div className='font-poppins'>
            <LandingSection></LandingSection>
            <CetagorySection  ></CetagorySection>
            
        </div>
    );
};

export default Home;