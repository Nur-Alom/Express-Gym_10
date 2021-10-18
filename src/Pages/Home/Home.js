import React from 'react';
import './Home.css'
import Banner from '../../images/34dgOF (1).jpg';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div className="">
            <div>
                <img className="banner" src={Banner} alt="" />
            </div>
            <div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;