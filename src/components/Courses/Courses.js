import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/5384c79a-f7bb-44fd-80a2-ac400a4e7b9a')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1>Unlimited Access to More Than {courses.length} Courses.</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                courses.map(course => <Course course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;