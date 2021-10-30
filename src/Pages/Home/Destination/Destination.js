import React from 'react';
import './Destination.css';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

const Destination = ({ destination }) => {
    const { _id, destinationName, tourCost, description, imageUrl } = destination;
    return (
        <Col className="pb-3 mt-5">
            <Card style={{ height: '500px' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{destinationName}</Card.Title>
                    <h5>Price: {tourCost}</h5>
                    <Card.Text>{description} </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Link to={`/booking/${_id}`}>
                        <button className="btn btn-warning">Book {destinationName.toLowerCase()}</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Destination;