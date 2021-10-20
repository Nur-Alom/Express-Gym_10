import React from 'react';
import './AboutUs.css';
import { Button } from 'react-bootstrap';
import img from '../../images/undraw_working_out_6psf.svg';

const AboutUs = () => {
    return (
        <div className="about-main container">
            <img style={{ width: '50%' }} id="img" src={img} alt="" />
            <div>
                <h1 className="about-hading">Welcome To Our <span className="text-warning">E-GYM</span> <br /> Express-Gym Center.</h1>
                <p className="about-dis">Join our special class now and take your fitness to another level. The number of seats is limited.Register today.</p>
                <Button className="about-btn fw-bold">More Info <i className="fas fa-arrow-right"></i></Button>
            </div>
        </div>
    );
};

export default AboutUs;