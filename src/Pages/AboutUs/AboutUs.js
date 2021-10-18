import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../../images/undraw_working_out_6psf.svg';

const AboutUs = () => {
    return (
        <div style={{ margin: "125px" }} className="container d-flex align-items-center p-5">
            <img style={{ width: '50%' }} src={img} alt="" />
            <div>
                <h1>Welcome To Our <span className="text-warning">E-GYM</span> <br /> Express-Gym Center.</h1>
                <p>Join our special class now and take your fitness to another level. The number of seats is limited.  Register today.</p>
                <Button className="fw-bold">More Info <i className="fas fa-arrow-right"></i></Button>
            </div>
        </div>
    );
};

export default AboutUs;