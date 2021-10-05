import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Demo from '../Demo/Demo';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://mocki.io/v1/5384c79a-f7bb-44fd-80a2-ac400a4e7b9a')
        .then(res => res.json())
        .then(data => setCourses(data.slice(0,4)))
    },[])
    return (
        <div>
            <div className="banner-container">
            <div>
            <h1 className="display-1 text-center text-light p-5">It's never too late to <br/>learn something new.</h1>
            <h3 className="fw-normal text-light my-3">Thousands of classes to fuel your creativity and career.</h3>
            <button className="btn btn-lg btn-success">Get Started <span className="ms-1"><FontAwesomeIcon icon={faPlay}/></span></button>
            </div>
            
        </div>
        <h1 className="display-4 my-4">Popular Courses</h1>
        <hr style={{width:'150px', margin:'0 auto', height:'2px'}} />
        <div className="row row-cols-1 row-cols-md-4 mt-3">
                {
                    courses.map(course => <Demo course={course}></Demo>)
                }
            </div>
        </div>
        
    );
};

export default Home;