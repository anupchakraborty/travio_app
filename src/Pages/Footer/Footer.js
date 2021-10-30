import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <section className="footer-bottom-area">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="copyright-text">
                            <p>Copyrights © 2021 All Rights Reserved, Powered by <Link to="/">Travio.</Link></p> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;