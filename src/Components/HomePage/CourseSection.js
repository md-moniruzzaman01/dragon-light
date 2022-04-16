
import { useNavigate } from 'react-router-dom';
import useCourse from '../../hooks/useCourse';
import CourseCard from './SeviesCard';

const CourseSection = () => {
    const [popularCourse, setPopularCourse] =useCourse();
    const navigate = useNavigate()

    const itemCardbtnClickHandle=(id)=>{
            console.log('hello',id);
            navigate(`/course/${id}`)
    }


    return (
        <div className='container mx-auto mb-24 max-w-7xl'>
            <div className='flex justify-between font-medium my-11 px-2'>
                <h1 className='text-2xl md:text-3xl'>Popular Course</h1>
                <button className='text-xl text-sky-400 md:text-2xl'>View All</button>
            </div>
           <div className='grid grid-cols-1 max-w-7xl mx-auto  gap-7 md:grid-cols-2 lg:grid-cols-3 px-2'>
               {
                    popularCourse?.map(course=> <CourseCard 
                        key={course.id}
                        course={course}
                        itemCardbtnClickHandle={itemCardbtnClickHandle}

                        ></CourseCard>)
               }
           </div>
        </div>
    );
};

export default CourseSection;