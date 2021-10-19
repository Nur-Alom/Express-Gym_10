import React from 'react';
import './ShopProteins.css';
import img1 from '../../images/shop1.jpg';
import img2 from '../../images/shop2.jpg';
import img3 from '../../images/shop3.jpg';
import img4 from '../../images/shop4.jpg';

const ShopProteins = () => {
    return (
        <div className="proteins">
            <h1 className="fw-bold shop-title">-SHOP PROTEINS-</h1>
            <hr />
            <div className="p-product">
                <div className="g-2">
                    <button className="border-0 bg-white m-2"><img className="proteins-img rounded-3" src={img1} alt="" /></button>
                    <h4>Protein Shake Biscuits</h4>
                    <strong>$16.80</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div className="g-2">
                    <button className="border-0 bg-white m-2"><img className="proteins-img rounded-3" src={img2} alt="" /></button>
                    <h4>Protein Shake Vegan</h4>
                    <strong>$29.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div className="g-2">
                    <button className="border-0 bg-white m-2"><img className="proteins-img rounded-3" src={img3} alt="" /></button>
                    <h4>Protein Shake Fruity</h4>
                    <strong>$24.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
                <div className="g-2">
                    <button className="border-0 bg-white m-2"><img className="proteins-img rounded-3" src={img4} alt="" /></button>
                    <h4>Protein Cinnamon</h4>
                    <strong>$25.00</strong>
                    <br />
                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopProteins;