import React from 'react';
import img from '../../images/logo.jpg';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-4">
            <h1>Express Gym <img style={{ width: "35px" }} src={img} alt="" /></h1>
            <p>All Rights Reserved. Express Gym Center ©2021.</p>
        </div>
    );
};

export default Footer;