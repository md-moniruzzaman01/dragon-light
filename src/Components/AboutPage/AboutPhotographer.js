import React from 'react';
import photographerImg from '../../image/photographerimg.jpg'

const AboutPhotographer = () => {
    return (
    <div className='bg-zinc-800'>
        <div>
            <h2 className='text-3xl text-center pt-20 text-gray-300' >About me</h2>
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-2  container mx-auto pb-36'>
            <div className='flex  justify-center items-center'>
                <img className='w-9/12 rounded-full h-auto  lg:w-auto lg:h-96' src={photographerImg} alt="" />
            </div>
            <div className='flex justify-center text-gray-300  items-center mt-7 lg:mt-0 mx-5'>
                <article>
                Hi there! I’m a leading Dhaka based photographer for every kind of corporate and social event; from the largest trade shows to your company’s annual meeting; from conferences - which educate  inform - to gala events which are intended to wow their guests. I continually strive to deliver images beyond your expectations. My clients all point to my passion, professionalism and service-minded approach. If you are working in event or destination management, hotel or conference venue marketing, I am confident you’ve found the right photographer to partner with … not only in Amsterdam but also across the Netherlands and Europe. Since 2016 I’ve gone truly global: completing assignments in more than 40 cities and 16 different countries. In addition to event work I also have wide experience in studio and family portraiture, corporate headshots, walkabouts, engagement, bachelorette parties and weddings. If you are busy planning your wedding please view the portfolio 
                </article>
            </div>
        </div>
    </div>
    );
};

export default AboutPhotographer;