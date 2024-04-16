import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, ListGroup, Badge} from 'react-bootstrap';

const Section_2 = () => {
    return (
        <Container id='s2' className='mt-5'>
            <Row>
                <Col xs={{ span: 12 }} 
                     lg={{ span: 5 }} className=''>
                    <h2 className='display-4 text-center text-lg-start cs-fw-c mb-4'>What’s different about Manage?</h2>
                    <p className='text-center text-lg-start'>Manage provides all the functionality your team needs, without 
                    the complexity. Our software is tailor-made for modern digital 
                    product teams. </p>
                </Col>
                <Col lg={{ span: 2}}>
                </Col>
                <Col xs={{ span: 12 }} 
                     lg={{ span: 5 }} className=''>
                    <ListGroup className='list-group'>
                        <ListGroup.Item className='border-0'>
                            <h3 className='h4 cs-fw-c'><Badge bg='custom' className='cs-badge rounded-pill'>01</Badge> Track company-wide progress</h3>
                            <div className='row'>
                                <span className='col-lg-1 col-sm-0'></span>
                                <p className='p-3 col-lg-11 col-sm-12'>See how your day-to-day tasks fit into the wider vision. Go from 
                                tracking progress at the milestone level all the way done to the 
                                smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='border-0'>
                            <h3 className='h4 cs-fw-c'><Badge bg='custom' className='cs-badge rounded-pill'>02</Badge> Advanced built-in reports</h3>
                            <div className='row'>
                                <span className='col-lg-1 col-sm-0'></span>
                                <p className='p-3 col-lg-11 col-sm-12'>Set internal delivery estimates and track progress toward company 
                                goals. Our customisable dashboard helps you build out the reports 
                                you need to keep key stakeholders informed.</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className='border-0'>
                            <h3 className='h4 cs-fw-c'><Badge bg='custom' className='cs-badge rounded-pill'>03</Badge> Everything you need in one place</h3>
                            <div className='row'>
                                <span className='col-lg-1 col-sm-0'></span>
                                <p className='p-3 col-lg-11 col-sm-12'>Stop jumping from one service to another to communicate, store files, 
                                track tasks and share documents. Manage offers an all-in-one team 
                                productivity solution.</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Section_2;