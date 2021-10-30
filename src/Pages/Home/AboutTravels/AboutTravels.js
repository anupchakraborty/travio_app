import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import './AboutTravels.css';

const AboutTravels = () => {
    return (
        <Container className="about-travel">
            <div className="left-sidebar"> 
                <img src={banner1} />
            </div>
            <div className="right-sidebar">
                <div className="travel-title">
                    <h4>ABOUT TRAVIO</h4>
                    <h2>World Best Travel Agency Company Since 2008.</h2>
                </div>
                <div className="travel-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <div>
                        <ul>
                            <li>Ratione voluptatem.sequi nesciunt.</li>
                            <li>Ratione voluptatem.sequi nesciunt.</li>
                            <li>Ratione voluptatem.sequi nesciunt.</li>
                        </ul>
                    </div>
                    <Button variant="warning">Find Tour</Button>
                </div>
            </div>
        </Container>
    );
};

export default AboutTravels;