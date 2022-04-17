import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [detail, setDetail]= useState([])
    const {id} = useParams()
    const blogs =[
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'1',comments:'3'},
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'2',comments:'3'},
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'3',comments:'3'},
        
    ]
   useEffect(()=>{
    const detailFind = blogs.find(blog => blog.id === id);
    setDetail(detailFind);
   },[id])
console.log();
    return (
        <div>
            <div  className='bg-zinc-800   shadow-md shadow-zinc-700 mb-11 mt-7 py-5 p-3 max-w-3xl mx-auto rounded-md'>
        <div className='w-full relative'>
            <img className='w-full h-full rounded-sm' src={detail?.img} alt="" />
            <p className='px-5 rounded-md text-lg text-white   py-5 left-4 absolute bottom-[-20px] bg-red-600'>jan 15</p>
        </div>
        <div className='relative'>
            <h1 className='text-white mt-7 text-3xl'>{detail?.name}</h1>
            <p className='text-gray-300 mt-5 pb-16'>{detail?.body}</p>
            <div className='flex text-gray-400 absolute bottom-1'>
            <p className=' border-r-2 border-gray-400'> <FontAwesomeIcon icon={faUser}/> <span className='px-2'>{detail?.tags}</span></p>
            <p className='ml-2'><FontAwesomeIcon icon={faComment}/> <span className='ml-2'>{detail?.comments} Comments</span></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Details;