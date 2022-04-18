import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import googleIcon from '../../image/google-icon.png'
const GoogleSignin = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorhandle;
        
            if(error){
                errorhandle = <p className='text-red-500 text-center'>{error?.message}</p>
            }
          
    
  
    return (
        <div>
        <div className='flex  items-center'>
             <div className='w-full '><hr /></div>
             
             <p className='px-5 text-gray-300 text-2xl'>or</p>
             <div className='w-full '><hr /></div>
         </div>
         <div>{errorhandle}</div>
         <div onClick={()=>signInWithGoogle() } className='text-gray-300 cursor-pointer  border flex justify-center  border-gray-500 rounded-3xl py-1.5 mt-5'>
             <img className='h-7 mr-2' src={googleIcon} alt="" /> 
             <h1 className='text-lg font-poppins '>Sign in with Google</h1>
             
         </div>
        </div>
    );
};

export default GoogleSignin;