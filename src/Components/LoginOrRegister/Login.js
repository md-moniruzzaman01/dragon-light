import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import GoogleSignin from './GoogleSignin';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const auth = getAuth(app);
    const navigte = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if(user){
        navigte(from, { replace: true })
     }
     let errorhandle;
     const wrongpassword = error?.message.includes('auth/wrong-password') 
     const usernotFound = error?.message.includes('auth/user-not-found') 
     const internalError = error?.message.includes('auth/internal-error') 
 
     if(error){
        if (wrongpassword) {
            toast("Worng password")
        }else if(usernotFound){
           toast("Wrong user email")
        
        }else if(internalError){
           toast("user or password not match")
        }
         else {
            toast('something is worng')
        }
    }
        
      const signInHandle=(e)=>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
   

      }

    return (
        <div className='flex justify-center items-center bg-zinc-900 min-h-[90vh]'>



            <div className="p-4 max-w-md w-full bg-zinc-800  rounded-lg border border-gray-600 shadow-md sm:p-6 lg:p-8">
                <form onSubmit={signInHandle} className="space-y-6" >
                    <h5 className="text-2xl font-medium text-white text-center ">Sign in</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300 ">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-600 text-white border  border-gray-500  placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium  text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-600 border border-gray-600 ring-offset-gray-800 text-white placeholder-gray-400   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4  rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="font-medium text-gray-300 ">Remember me</label>
                            </div>
                        </div>
                        
                        <button className="ml-auto text-sm text-blue-700 hover:underline ">
                            Forget Password?</button>
                    </div>
                   
                    <input className="w-full text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" value="Login to your account" />
                    <div className="text-sm font-medium text-gray-300">
                        Not registered? <button onClick={()=>navigte('/register')} className="text-blue-700 hover:underline " >Register</button> 
                    </div>
                </form>
                <GoogleSignin></GoogleSignin>
                <ToastContainer></ToastContainer>
            </div>


















        </div>
    );
};

export default Login;