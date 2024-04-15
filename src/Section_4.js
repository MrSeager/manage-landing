import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Button} from 'react-bootstrap';

const Section_4 = () => {

    return (
        <Container fluid id='s4' className='d-flex flex-column flex-lg-row align-items-center justify-content-between p-5'>
            <h5 className='display-3 cs-fw text-center text-lg-start text-white m-4'>Simplify how your team works today.</h5>
            <Button variant='custom' className='cs-btn2 rounded-pill m-4'>Get Started</Button>
        </Container>
    );
};

export default Section_4;