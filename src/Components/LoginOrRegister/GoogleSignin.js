import React from 'react';
import googleIcon from '../../image/google-icon.png'
const GoogleSignin = () => {
    return (
        <div>
        <div className='flex  items-center'>
             <div className='w-full '><hr /></div>
             
             <p className='px-5 text-gray-300 text-2xl'>or</p>
             <div className='w-full '><hr /></div>
         </div>
         <div className='text-gray-300 cursor-pointer  border flex justify-center  border-gray-500 rounded-3xl py-1.5 mt-5'>
             <img className='h-7 mr-2' src={googleIcon} alt="" /> 
             <h1 className='text-lg font-poppins '>Sign in with Google</h1>
             
         </div>
        </div>
    );
};

export default GoogleSignin;