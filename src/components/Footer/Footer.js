import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerMain pt-5 mt-3'>
            <div className='container-lg p-3'>
                <Row>
                    <Col className='text-start text-white p-2' xs={10} sm={6} md={3}>
                        <h2>Study 24/7</h2>
                        <p><small>Students, prospective students, faculty, administrators, graduates, and alumni all have specific needs.</small></p>
                        <div className='d-flex align-items-center text-white'>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Button>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Button>
                            <Button variant='none' className='text-white mr-1'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Button>
                        </div>
                    </Col>
                    <Col className='text-start footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Popular Searches</h4>
                        <h6>Illustration</h6>
                        <h6>Photography</h6>
                        <h6>Development</h6>
                        <h6>Design</h6>
                        <h6>Music</h6>
                    </Col>
                    <Col className='footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Quick Links</h4>
                        <h6><a className="text-decoration-none text-white" href="/courses">Courses</a></h6>
                        <h6><a className="text-decoration-none text-white" href="/contact">Contact</a></h6>
                        <h6><a className="text-decoration-none text-white" href="/about">About</a></h6>
                        <h6><a className="text-decoration-none text-white" href="/home">Terms of Use</a></h6>
                        <h6><a className="text-decoration-none text-white" href="/home">Privacy Policy</a></h6>
                    </Col>
                    <Col className='footerLink text-white p-2' xs={10} sm={6} md={3}>
                        <h4>Contact Us</h4>
                        <h6>someone@mail.com</h6>
                        <h6>+880*******</h6>
                        <h6>Chittagong, Bangladesh.</h6>
                    </Col>
                </Row>
            </div>
            <div className='lastText p-4'>
                <p className='text-center m-0'>Copyright&copy;2021 Study 24/7, All Right Reserved.</p>
            </div>       
        </div>
    );
};

export default Footer;