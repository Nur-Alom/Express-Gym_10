import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ClassDetail.css';

const ClassDetail = () => {
    const { classId } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const url = `https://nur-alom.github.io/jsonapi/mydata.json`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const singleData = (data?.find(d => d.id === classId))
                setDetail(singleData)
            })
    }, [classId]);

    const { price, time, dates, img, title, description, intensity, feel, maximize, } = detail;

    return (
        <div style={{ backgroundColor: "black" }}>
            <div className="container d-main">
                <div>
                    <img className="detail-img" src={img} alt="" />
                </div>
                <div className="detail-info">
                    <h3 className="detail-text d-name">{title}</h3>
                    <p className="detail-text">{description}</p>
                    <ul className="detail-data">
                        <li><span className="d-name">INTENSITY</span> <br />{intensity}</li>
                        <li><span className="d-name">FEEL</span> <br /> {feel}</li>
                        <li><span className="d-name">MAXIMIZE</span> <br /> {maximize}</li>
                        <li><span className="d-name">PRICE</span> <br /> {price}</li>
                        <li><span className="d-name">TIME</span> <br /> {time}</li>
                        <li><span className="d-name">DATES</span> <br /> {dates}</li>
                    </ul>
                    <button className="more-btn">More..</button>
                </div>
            </div>
        </div>
    );
};

export default ClassDetail;