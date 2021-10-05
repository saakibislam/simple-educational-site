import { faClipboardCheck, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Course = (props) => {
    console.log(props);
    const {title, description, instructor, img, languages, lastUpdated, students} = props.course;
    const {rating, count} = props.course.reviews;
    return (
        <div className="col">
            <div className="card border-rounded p-2 mx-3">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 50)}</p>
                    <ul className="list-unstyled"><small>
                        <div className="d-flex justify-content-between my-1">
                            <li className="list-inline-item">Instructor: <b>{instructor}</b></li>
                            <li className="list-inline-item">Language: {languages}</li>
                        </div>
                        <div className="d-flex justify-content-between my-1">
                            <li className="list-inline-item">Last Updated: {lastUpdated}</li>
                            <li className="list-inline-item">Enrolled: {students}</li>
                        </div>
                        <div className="d-flex justify-content-between my-1">
                            <li className="list-inline-item">Rating: {rating}</li>
                            <li className="list-inline-item">Reviews: {count}</li>
                        </div>
                    </small></ul>
                    <div className="d-flex justify-content-between my-1">
                        <button className="btn btn-md btn-success"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> <span className="mx-2">Wishlist</span></button>
                        <button className="btn btn-md btn-success"><FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon> <span className="mx-2">Enroll</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;