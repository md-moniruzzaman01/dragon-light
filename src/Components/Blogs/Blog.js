import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = ({blg,Detailsbtn}) => {
    const {id,img,name,body,comments,tags} =blg;
    return (
   
            <div onClick={()=>Detailsbtn(id)} className='bg-zinc-800   shadow-md shadow-zinc-700 mb-11 mt-7 py-5 p-3 max-w-3xl mx-auto rounded-md'>
        <div className='w-full relative'>
            <img className='w-full h-full rounded-sm' src={img} alt="" />
            <p className='px-5 rounded-md text-lg text-white   py-5 left-4 absolute bottom-[-20px] bg-red-600'>jan 15</p>
        </div>
        <div className='relative'>
            <h1 className='text-white mt-7 text-3xl'>{name}</h1>
            <p className='text-gray-300 mt-5 pb-16'>{body}</p>
            <div className='flex text-gray-400 absolute bottom-1'>
            <p className=' border-r-2 border-gray-400'> <FontAwesomeIcon icon={faUser}/> <span className='px-2'>{tags}</span></p>
            <p className='ml-2'><FontAwesomeIcon icon={faComment}/> <span className='ml-2'>{comments} Comments</span></p>
            </div>
        </div>
        </div>
       
    
    );
};

export default Blog;