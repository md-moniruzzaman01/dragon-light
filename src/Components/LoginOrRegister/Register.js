import { getAuth } from 'firebase/auth';
import React, { useRef } from 'react';


import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
const Register = () => {
    const auth = getAuth(app);
    const navigte = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

        const emailRef = useRef()
        const passwordRef = useRef()

      if(user){
         navigte('/')
      }


      const createAccountHandle=(e)=>{
            e.preventDefault()
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          
         console.log(email,password);
         createUserWithEmailAndPassword(email, password);
      }



    return (
        <div className='flex justify-center items-center min-h-[90vh]'>

            <div className="p-4 max-w-md w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                <form onSubmit={createAccountHandle} className="space-y-6" >
                    <h5 className="text-2xl  text-center font-medium text-gray-900 ">Register</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                        <input  type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Your name"  />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div>
                
                    
                    <input className="w-full text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" value="Login to your account" />
                    <div className="text-sm font-medium text-gray-500">
                    Already have an account? <button className="text-blue-700 hover:underline "  >Login</button> 
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Register;