import { faCameraRetro, faLeaf, faPaperPlane, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import CatagoryItem from './CatagoryItem';
import nuture from '../../image/nature.jfif'
import proparty from '../../image/proparty.jfif'
import wadding from '../../image/wedding.jfif'
import eventphoto from '../../image/event.jpg'
import { addToDb } from '../othersFile/Fakedbs';
import { useNavigate } from 'react-router-dom';


const CetagorySection = () => {
  
const navigate = useNavigate()
    const servies = [{id:"1",price:'49', servieName: "Nature Photography",Image:`${nuture}`, about:"You're which creepeth were yielding kind, divide sixten po gatherin all first fill Seed wherein life. Years one fifth"},
                         {id:"2",price:'89', servieName: "Property Tours",Image:`${proparty}`, about:"360 Home Photography  professional specializes in home, apartment, office buildings and retail spaces of photo and video productions."}, 
                         {id:"3",price:'79', servieName: "Eventy Coverage",Image:`${eventphoto}`, about:"family portraiture, corporate headshots, walkabouts, engagement, bachelorette parties and weddings. "}, 
                         {id:"4", price:'99',servieName: "Weeding Photography",Image:`${wadding}`, about:" Capable of handling any media events like Photography, Cinematography, Music video, etc. Cover your wedding / Event with a photographer on a limited budget"}, 

                    ]
        
     
   const checkoutbtn=(id)=>{
       addToDb(id)
       navigate('/checkout')

   }
   
    return (
        <div className='bg-zinc-800'>
        <div className='min-h-screen pt-24 container mx-auto font-poppins text-center  max-w-7xl'>
            <h2 className='text-4xl text-white font-poppins font-medium mb-3'>What <span className='text-red-600 '>We</span> Offer</h2>
            <p className='text-gray-300'>She'd earth that midst void creeping him above seas.</p>
            <div className='grid grid-cols-1 mx-auto my-11 gap-3.5 md:grid-cols-2 lg:grid-cols-4 '>
            {
          servies.map(service => <CatagoryItem service={service} key={service.id} checkoutbtn={checkoutbtn}></CatagoryItem>)
      }
            </div>
            <div>
                
                
                </div>



     

            
           
            </div>


            </div>

           
            
        
    );
};

export default CetagorySection;