import React from 'react';
import './ShopSportBottles.css';
import img1 from '../../images/shop5.jpg';
import img2 from '../../images/shop6.jpg';
import img3 from '../../images/shop7.jpg';
import img4 from '../../images/shop8.jpg';

const ShopSportBottles = () => {
    return (
        <div className="bottle">
            <h1 className="fw-bold shop-title">-SHOP SPORT BOTTLES-</h1>
            <hr />
            <div className="b-product">
                <div>
                    <button className="border-0 bg-white m-2"><img className="bottle-img rounded-3" src={img1} alt="" /></button>
                    <h4>Sport Bottle</h4>
                    <strong>$12.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div>
                    <button className="border-0 bg-white m-2"><img className="bottle-img rounded-3" src={img2} alt="" /></button>
                    <h4>Sport Bottle</h4>
                    <strong>$15.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div>
                    <button className="border-0 bg-white m-2"><img className="bottle-img rounded-3" src={img3} alt="" /></button>
                    <h4>Sport Bottle</h4>
                    <strong>$14.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div>
                    <button className="border-0 bg-white m-2"><img className="bottle-img rounded-3" src={img4} alt="" /></button>
                    <h4>Sport Bottle</h4>
                    <strong>$18.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopSportBottles;