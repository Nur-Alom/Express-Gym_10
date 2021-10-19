import React from 'react';
import './Home.css'
import Banner from '../../images/34dgOF (1).jpg';
import Services from '../Services/Services';
import ShopProteins from '../ShopProteins/ShopProteins';
import ShopSportBottles from '../ShopSportBottles/ShopSportBottles';

const Home = () => {

    return (
        <div className="">
            <div>
                <img className="banner" src={Banner} alt="" />
            </div>
            <div className="section">
                <Services></Services>
                <ShopProteins></ShopProteins>
                <ShopSportBottles></ShopSportBottles>
            </div>
        </div>
    );
};

export default Home;