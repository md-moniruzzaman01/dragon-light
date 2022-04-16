import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

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


      const signInHandle=(e)=>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
      }

    return (
        <div className='flex justify-center items-center min-h-[90vh]'>



            <div className="p-4 max-w-md w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
                <form onSubmit={signInHandle} className="space-y-6" >
                    <h5 className="text-xl font-medium text-gray-900 ">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required="" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 " />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="font-medium text-gray-900 ">Remember me</label>
                            </div>
                        </div>
                        <a href="/" className="ml-auto text-sm text-blue-700 hover:underline ">Lost Password?</a>
                    </div>
                    <input className="w-full text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit" value="Login to your account" />
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <button className="text-blue-700 hover:underline "  >Register</button> 
                    </div>
                </form>
            </div>


















        </div>
    );
};

export default Login;