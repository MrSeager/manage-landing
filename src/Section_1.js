import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImgIll from './images/illustration-intro.svg';

const Section_1 = () => {
    return (
        <Container id='s1' className='mt-5'>
            <Row>
                <Col sm={{ span: 12, order: 3 }} 
                     md={{ span: 5, order: 1 }} className='d-flex flex-column justify-content-center align-items-md-start align-items-sm-center'>
                    <h1 className='display-3'>Bring everyone together to build better products.</h1>
                    <p className='h5 fw-normal'>Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.</p>
                    <button className='cs-btn'>Get Started</button>
                </Col>
                <Col md={{ span: 2, order: 2 }}>
                </Col>
                <Col sm={{ span: 12, order: 1 }} 
                     md={{ span: 5, order: 3 }}>
                    <img src={ImgIll} alt='Illustration' className='img-fluid float-end' />
                </Col>
            </Row>
        </Container>
    );
};

export default Section_1;