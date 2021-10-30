import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data));
    }, [])
    return (
        <Container className="mt-5">
            <h3>MODERN and BEAUTIFUL</h3>
            <h1>Our Most Popular Adventures</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    destinations.map(destination => <Destination
                        key={destination.id}
                        destination={destination}
                    ></Destination>)
                }
            </Row>
        </Container>
    );
};

export default Destinations;