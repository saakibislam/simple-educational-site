import React from 'react';

const Demo = (props) => {
    const {title, img, instructor, students} = props.course;
    const {rating} = props.course.reviews;
    return (
        <div className="col">
            <div className="card border-rounded p-2 mx-3">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <ul className="list-unstyled my-4">
                        <li>Instructor: <b>{instructor}</b></li>
                        <li>Enrolled: {students}</li>
                        <li>Rating: {rating}</li>
                    </ul>
                    <button className="btn btn-lg btn-success"><span className="mx-2">Enroll</span></button>
                </div>
            </div>
        </div>
    );
};

export default Demo;