import React from 'react';
import developerImg from '../../image/260745508_100103505857889_350371139667716883_n.jpg'

const AboutDeveloper = () => {
    return (
        <div className='bg-zinc-800   '>
            <h1 className='text-5xl pt-20 text-center font-poppins text-gray-300'>About me</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2  container mx-auto'>
                
            <div className='flex justify-center mt-20'>
                <img className='w-auto rounded-full h-3/6' src={developerImg} alt="" />
            </div>
            <div className='flex justify-center text-gray-300 mt-24 mx-5'>
              <div>
              <h1 className=' text-2xl text-gray-300 '> Hi there! I’m a Md moniruzzaman.</h1>
                <article>
                i'm learning Website delevloping from great institute celled Programming Hero. so i can build 
                  for every kind of Website from the largest to small  useing mordan tecnology.
                  My goal is to complete my course with high point for that i'm tring my best to achive my goal.
                  <br />
                  I have build some dome website like protolio , resturent website using api, and one big emmomarce  project (ema-john). That's not all i have some practies website you can see them on my github account .
                    
                </article>
                <p className='text-sky-400'>please view the portfolio </p>
              </div>
            </div>
        </div>
    </div>
    );
};

export default AboutDeveloper;