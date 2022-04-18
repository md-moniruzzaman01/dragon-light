import { getAuth } from 'firebase/auth';
import React, { useRef } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import GoogleSignin from './GoogleSignin';
const Register = () => {
    const auth = getAuth(app);
    const navigte = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      
      let errorhandle;
      if(error){
          errorhandle = <p className='text-red-400' > {error?.message} </p>
      }

        const emailRef = useRef()
        const passwordRef = useRef()

      if(user){
         
        //  navigte('/')
      }
   

      const createAccountHandle= async(e)=>{
            e.preventDefault()
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
         toast('To confirm check your mail')
            
  
       
        
      }



    return (
        <div className='flex justify-center items-center bg-zinc-900 min-h-[90vh]'>

            <div className="p-4 max-w-md w-full bg-zinc-800 rounded-lg border border-gray-600  shadow-md sm:p-6 lg:p-8">
                <form onSubmit={createAccountHandle} className="space-y-6" >
                    <h5 className="text-2xl  text-center font-medium text-white ">Register</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
                        <input  type="text" name="name" id="name" className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your name"  />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 ">Your email</label>
                        <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium  text-gray-300">Your password</label>
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-600 border border-gray-500 placeholder-gray-400 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div>
                
                   <div>{errorhandle}</div>
                    <input className="w-full text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" value="Login to your account" />
                    <div className="text-sm font-medium text-gray-300">
                    Already have an account? <button onClick={()=>navigte('/login')} className="text-blue-700 hover:underline "  >Login</button> 
                    </div>
                </form>
                <GoogleSignin></GoogleSignin>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;