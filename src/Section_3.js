import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';

import ImgAva1 from './images/avatar-anisha.png';
import ImgAva2 from './images/avatar-ali.png';
import ImgAva3 from './images/avatar-richard.png';
import ImgAva4 from './images/avatar-shanai.png';

const Section_3 = () => {

    return (
        <Container fluid id='s3' className='d-flex flex-column align-items-center'>
            <h3 className='display-5 m-5 cs-fw-c'>What they’ve said</h3>
            <Row className='overflow-auto flex-nowrap' id='scrollThing'>
                <Col xs={4}>
                    <Card className='border-0 text-center'>
                        <Card.Img variant="top" src={ImgAva1} alt='avatar' className='mx-auto' />
                        <Card.Body>
                            <Card.Title className='cs-fw-c'>Anisha Li</Card.Title>
                            <Card.Text>“Manage has supercharged our team’s workflow. The ability to maintain 
                            ty on larger milestones at all times keeps everyone motivated.”</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='border-0 text-center'>
                        <Card.Img variant="top" src={ImgAva2} alt='avatar' className='mx-auto' />
                        <Card.Body>
                            <Card.Title className='cs-fw-c'>Ali Bravo</Card.Title>
                            <Card.Text>“We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='border-0 text-center'>
                        <Card.Img variant="top" src={ImgAva3} alt='avatar' className='mx-auto' />
                        <Card.Body>
                            <Card.Title className='cs-fw-c'>Richard Watts</Card.Title>
                            <Card.Text>“Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card className='border-0 text-center'>
                        <Card.Img variant="top" src={ImgAva4} alt='avatar' className='mx-auto' />
                        <Card.Body>
                            <Card.Title className='cs-fw-c'>Shanai Gough</Card.Title>
                            <Card.Text>“Their software allows us to track, manage and collaborate on our projects 
                            from anywhere. It keeps the whole team in-sync without being intrusive.”</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Button variant='custom' className='cs-btn m-5 rounded-pill'>Get Started</Button>
        </Container>
    );
};

export default Section_3;