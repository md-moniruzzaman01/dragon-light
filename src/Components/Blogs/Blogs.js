import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from './Blog';
import './Blogs.css'
import firstImg from '../../image/authentication-vs-authorization.png'
import secImg from '../../image/firebase1200.jpg'
import thrdImg from '../../image/images.png'


const Blogs = () => {
    const navigate = useNavigate()
    const blogs =[
        {name:'What is difference between authorization and authentication?', body:'Authorization in system security is the process of giving the user permission to access a specific resource.In simple terms, authentication is the process of verifying who a user is.Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system.In authentication process, the identity of users are checked for providing the access to the system.Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.',img:`${firstImg}`,tags:'Travel, lifestyle', id:'1',comments:'3'},
        {name:' Why are you using firebase? What other options do you have to implement authentication?', body:"Firebase is a web app  development platform own by Google.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.It allows built in email/password authentication system. It also supports OAuth2 for Google,Facebook, Twitter and GitHub. In new days we have some alternative of firebase authentication like Okta,0auth etc.but for beganing firebase is best option to start . ",img:`${secImg}`,tags:'Travel, lifestyle', id:'2',comments:'3'},
        {name:'What other services does firebase provide other than authentication', body:"Firebase is a awesome tool to developer's. it provied some services like Realtime Database, File Storage , Authentication and Hosting . firebase file storage  provides a simple way to save binary files ??? most often images, but it could be anything ??? to Google Cloud Storage directly from the client!!! .Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2.",img:`${thrdImg}`,tags:'Travel, lifestyle', id:'3',comments:'3'},
        
    ]
const Detailsbtn =(id)=>{
        navigate(`/blogs/${id}`)
}


    return (
      <div className='bg-zinc-900'>
            <div className='blog-section container mx-auto   font-poppins'>
         <div>
         {
             blogs.map(blg=> <Blog Detailsbtn={Detailsbtn} key={blg.id} blg={blg}></Blog>)
         }
         </div>
        
       <div className=''>
       <div className='category w-full  md:w-10/12  bg-zinc-800 min-h-[90vh]  text-gray-300 mx-auto rounded   '>
            <h1 className='text-white text-2xl border-b-2 border-gray-400'>Category</h1>
            <p onClick={()=> navigate('/blogs/1')}  className='mt-5 border-b-small py-2'>authorization and authentication?</p>
            <p onClick={()=> navigate('/blogs/2')} className='border-b-small py-2'>firebaseand other  authentication</p>
            <p onClick={()=> navigate('/blogs/3')} className='border-b-small py-2'>services does firebase provide</p>
        </div>
       </div>
        </div>
        </div>
      
    );
};

export default Blogs;