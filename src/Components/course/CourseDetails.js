import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';


const CourseDetails = () => {
    const { id } = useParams();
    const [courses, setCourses] = useState([])
    const [detailItem, setDetailItem] = useState([])
    useEffect(() => {
        fetch('/courceData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const item = courses.find(items => items.id === id);
    useEffect(() => {
        setDetailItem(item);
    }, [item])
    console.log(detailItem);

    return (
        <div className='min-h-screen '>
           <div className='container flex flex-col justify-center mx-auto  mt-11'>
               <div className='w-full mx-auto lg:w-8/12'><img className='w-full max-h-[700px]' src={detailItem?.picture} alt="" /></div>
           </div>
           <div className='container mt-11 lg:w-8/12 flex justify-center mx-auto mb-44'>
               <div className='w-full text-gray-900'>
                   <h1 className='text-4xl font-medium '>{detailItem?.category}</h1>
                    <p className='text-xl  mt-3'>{detailItem?.about}</p>
               </div>
           </div>
        </div>
    );
};

export default CourseDetails;