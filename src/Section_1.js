import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, Button, Image} from 'react-bootstrap';

import ImgIll from './images/illustration-intro.svg';

const Section_1 = () => {
    return (
        <Container id='s1' className='mt-5'>
            <Row>
                <Col sm={{ span: 12, order: 3 }} 
                     lg={{ span: 5, order: 1 }} className='d-flex flex-column justify-content-center align-items-lg-start align-items-sm-center'>
                    <h1 className='display-3 mb-4 text-center text-lg-start cs-fw-c'>Bring everyone together to build better products.</h1>
                    <p className='h5 fw-normal mb-4 text-center text-lg-start'>Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.</p>
                    <Button variant='custom' className='cs-btn rounded-pill'>Get Started</Button>
                </Col>
                <Col lg={{ span: 2, order: 2 }}>
                </Col>
                <Col sm={{ span: 12, order: 1 }} 
                     lg={{ span: 5, order: 3 }}>
                    <Image fluid src={ImgIll} alt='Illustration' />
                </Col>
            </Row>
        </Container>
    );
};

export default Section_1;