import { faBars,  faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import CustomLink from '../othersFile/CustomLink';

const Header = () => {
    const navigate = useNavigate()
    const [open ,setopen ] = useState(false)
    const auth = getAuth(app);
    const [user, loading, error] = useAuthState(auth);
    const prifileIcon = user?.email[0].toLocaleUpperCase()
   
   const logOutHandle=()=>{
        signOut(auth);
   }








       
    return (
        <div className='bg-zinc-900'>
        <div className='flex justify-between px-2 h-16 items-center  container mx-auto  '>
            <div>
                <h2 className='text-3xl text-headerColor font-lavishly font-semibold'>
                Edu<span className='text-sky-600'>skull</span>
                </h2>
            </div>
            

       
       <div onClick={()=> setopen(!open)} className='h-6 text-white w-8 md:hidden'>
           {open? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
           </div>


        
         <ul className={` sm:static z-10   sm:py-8 md:py-0 items-center bg-zinc-900 py-4 justify-end md:w-11/12 w-full duration-500 ease-in-out md:flex  lg:bg-none  absolute ${ open ? 'top-11 left-0 ' : 'top-[-1200px]'} `}>
        
           <div className='md:flex justify-between  md:w-11/12 lg:w-9/12'>


           <div className='md:flex justify-evenly text-poppins  items-center text-white lg:w-6/12 lg:ml-14'>
            <li><CustomLink className=' mr-3 pl-2' to="/">Home</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/blogs">Blogs</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/checkout">Check out</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/contact">Contact us</CustomLink></li>
            <li><CustomLink className=' mr-3 pl-2' to="/about">About</CustomLink></li>
            </div>
            {
                user? <div  ><button onClick={logOutHandle} className='bg-gray-400  px-6 border-2  py-2  font-medium text-white rounded-3xl '>log out</button></div> : 
                <div className='flex items-center '>

                <li> <Link to="/login" className='mr-4 pl-2  text-white text-md text-medium border-r-2  border-gray-500 pr-3'>login</Link> </li>
                <li><Link  className='bg-headerColor  px-6 border-2  py-2 text-md font-medium text-white rounded-3xl ' to='/register'>Register</Link>  </li>
            </div>
            }




           </div>
        </ul>
       </div>
       </div>
       
           
          
        
    );
};

export default Header;