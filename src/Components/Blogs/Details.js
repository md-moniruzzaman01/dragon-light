import { faComment, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firstImg from '../../image/authentication-vs-authorization.png'
import secImg from '../../image/firebase1200.jpg'
import thrdImg from '../../image/images.png'
const Details = () => {
    const [detail, setDetail]= useState([])
    const {id} = useParams()
    const blogs =[
        {name:'What is difference between authorization and authentication?', body:'Authorization in system security is the process of giving the user permission to access a specific resource.In simple terms, authentication is the process of verifying who a user is.Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system.In authentication process, the identity of users are checked for providing the access to the system.Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.',img:`${firstImg}`,tags:'Travel, lifestyle', id:'1',comments:'3'},
        {name:' Why are you using firebase? What other options do you have to implement authentication?', body:"Firebase is a web app  development platform own by Google.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.It allows built in email/password authentication system. It also supports OAuth2 for Google,Facebook, Twitter and GitHub. In new days we have some alternative of firebase authentication like Okta,0auth etc.but for beganing firebase is best option to start . ",img:`${secImg}`,tags:'Travel, lifestyle', id:'2',comments:'3'},
        {name:'What other services does firebase provide other than authentication', body:"Firebase is a awesome tool to developer's. it provied some services like Realtime Database, File Storage , Authentication and Hosting . firebase file storage  provides a simple way to save binary files — most often images, but it could be anything — to Google Cloud Storage directly from the client!!! .Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2.",img:`${thrdImg}`,tags:'Travel, lifestyle', id:'3',comments:'3'},
        
    ]
   useEffect(()=>{
    const detailFind = blogs.find(blog => blog.id == id);
    setDetail(detailFind);

   },[])
console.log(id);
    return (
        <div>
            <div  className='bg-zinc-800   shadow-md shadow-zinc-700 mb-11 mt-7 py-5 p-3 px-5 max-w-6xl mx-auto rounded-md'>
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