import { faBookOpen, faGraduationCap, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSpring, animated } from 'react-spring';
import img from '../../images/about.jpg'

const About = () => {
    const props = useSpring({ number: 49, from: { number: 0 } });
    const propsTwo = useSpring({ number: 210, from: { number: 0 } });
    const propsThree = useSpring({ number: 487512, from: { number: 0 } });
    return (
        <div>
            <section className="my-5 container">
                <div className="row">
                    <div className="col-md-5 mb-3">
                        <img src={img} alt="" />
                    </div>
                    <div className="col-md-6 mb-2">
                        <h1 className="fw-bold" style={{ color: '#fd592d' }}>Study 24/7</h1>
                        <h3 className="fw-bolder">Accelerate your future.</h3>
                        <p>When deciding on the visual aspects of an education website, there are many important factors to consider. Be strategic. This website could be the decision-maker for those who are interested in gaining knowledge from your institution or becoming employees who share their knowledge with others.</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="overflow-hidden w-25">
                                <h5>Courses</h5>
                                <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: '4em', color: 'red' }}></FontAwesomeIcon><br />
                                <animated.span style={{ fontSize: '2em' }}>{props.number}</animated.span>
                            </div>
                            <div className="overflow-hidden w-25">
                                <h5>Instructor</h5>
                                <FontAwesomeIcon icon={faUsers} style={{ fontSize: '4em', color: 'red' }}></FontAwesomeIcon><br />
                                <animated.span style={{ fontSize: '2em' }}>{propsTwo.number}</animated.span>
                            </div>
                            <div className="overflow-hidden w-25">
                                <h5>Students</h5>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ fontSize: '4em', color: 'red' }}></FontAwesomeIcon><br />
                                <animated.span style={{ fontSize: '2em' }}>{propsThree.number}</animated.span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;