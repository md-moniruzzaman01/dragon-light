import { faBookOpenReader, faClockFour, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CourseCard = () => {

    return (
        <div >

<div className="rounded overflow-hidden shadow-lg relative min-h-[510px] ">
      <img className="w-full " src="" alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">''</div>
        <p className="text-gray-700 text-base mb-11">
         ...
        </p>
      </div>
      <div className="px-6 pb-2 flex justify-end absolute bottom-1 right-0">
      <button  className='border-2 border-gray-700 px-5 py-1 text-gray-700'>Read more...</button>
      </div>
    </div>







        </div>
    );
};

export default CourseCard;