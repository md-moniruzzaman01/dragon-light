
import React, { useEffect, useState } from 'react';

const useCourse = () => {
    const [popularCourse, setPopularCourse] =useState([]);
useEffect(()=>{
    fetch('courceData.json')
    .then(res => res.json())
    .then(data => setPopularCourse(data))
},[])
    return  [popularCourse, setPopularCourse]
};

export default useCourse;