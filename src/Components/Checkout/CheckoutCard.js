import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CheckoutCard = ({cd,removebtn}) => {
    const {id,Image,price,about,servieName}=cd;
    return (
        <div>
            <div class="flex relative mb-5 h-48  mx-auto flex-col items-center  rounded-lg border shadow-md md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 hover:bg-gray-700">
    <img class=" w-full   rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight  text-white">{servieName}</h5>
        <p class=" font-normal  text-gray-400">{about}</p>
        <p className='text-gray-300 text-2xl'>${price}</p>
        <div onClick={()=>removebtn(id)} className='text-white absolute right-0 top-0 px-3 py-1.5 bg-gray-600 rounded-full text-xl'>
        
        <FontAwesomeIcon icon={faXmark}/>
    </div>
    </div>
    </div>
    
        </div>
    );
};

export default CheckoutCard;