import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from './Blog';
import './Blogs.css'

const Blogs = () => {
    const navigate = useNavigate()
    const blogs =[
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'1',comments:'3'},
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'2',comments:'3'},
        {name:'Google inks pact for new 35-storey office', body:'',img:"https://preview.colorlib.com/theme/pentax/img/blog/main-blog/xm-blog-1.jpg.pagespeed.ic.75qoyuAE5W.webp",tags:'Travel, lifestyle', id:'3',comments:'3'},
        
    ]
const Detailsbtn =(id)=>{
        navigate(`/blogs/${id}`)
}


    return (
      <div className='bg-zinc-900'>
            <div className='blog-section container mx-auto  px-2 font-poppins'>
         <div>
         {
             blogs.map(blg=> <Blog Detailsbtn={Detailsbtn} key={blg.id} blg={blg}></Blog>)
         }
         </div>
        
       <div className=''>
       <div className='category w-10/12 bg-zinc-800 min-h-[90vh] px-2 text-gray-300 mx-auto rounded   '>
            <h1 className='text-white text-2xl border-b-2 border-gray-400'>Category</h1>
            <p className='mt-5 border-b-small py-2'>firebase</p>
            <p className='border-b-small py-2'> react hook</p>
            <p className='border-b-small py-2'> firebase hosting</p>
        </div>
       </div>
        </div>
        </div>
      
    );
};

export default Blogs;