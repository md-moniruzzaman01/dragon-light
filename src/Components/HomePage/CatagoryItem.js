
import React from 'react';

const CatagoryItem = ({service,checkoutbtn}) => {
    const{id,Image,about,servieName,price}=service;
    return (
        <div className="rounded overflow-hidden text-white shadow-lg shadow-zinc-800 relative min-h-[510px] ">
        <img className="w-full h-48" src={Image} alt="servies"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{servieName}</div>
          <p className="text-gray-300 text-base mb-3">
              {about}
          </p>
        </div>
        <div>
            <p className='text-4xl text-gray-300 mb-2'>${price}</p>
            <p className='text-gray-400'>Attend only first day</p>
        </div>
        <div className="px-6 pb-2 flex justify-center absolute  bottom-1 w-full">
        
        <button  onClick={()=> checkoutbtn(id)} className='border-2  hover:border-sky-700 border-gray-400  w-8/12 py-1 rounded-3xl  text-gray-200'>Check Out</button>
        </div>
          </div>
    );
};

export default CatagoryItem;