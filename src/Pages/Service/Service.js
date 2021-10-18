import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { img, title, description, price } = props.service;
    console.log(title)

    return (
        <div className="col-md-4 my-3">
            <Card className="" style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                <Card.Body>
                    <Card.Title><span className="fw-normal">Name:</span> {title}</Card.Title>
                    <Card.Text>Price: {price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="warning text-white fw-bold rounded-pill">Enroll Now</Button>
                    <Button variant="success text-white fw-bold rounded-pill ms-3">More..</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;