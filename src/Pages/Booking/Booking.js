import React, {useState, useEffect} from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css';

const Bookings = () => {
    const { destinationId } = useParams();
    const [destination, setDestination] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/destinations/${destinationId}`)
        .then(res => res.json())
        .then(data => setDestination(data))
    }, [])
    return (
        <Container className="about-destination">
            <div className="left-sidebar"> 
                <img src={destination.imageUrl} />
            </div>
            <div className="right-sidebar">
                <div className="travel-title">
                    <h2>ABOUT {destination.destinationName}</h2>
                </div>
                <div className="travel-body">
                    <p>{destination.description}</p>

                    <Button variant="warning">Booked</Button>
                </div>
            </div>
        </Container>
    );
};

export default Bookings;