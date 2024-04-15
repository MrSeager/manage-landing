import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import {Container, Row, Col, ButtonGroup, ButtonToolbar, Button, Image, Form } from 'react-bootstrap';

import ImgLogo from './images/Image.png'
import FBIcon from './images/icon-facebook.svg';
import YTIcon from './images/icon-youtube.svg';
import TIcon from './images/icon-twitter.svg';
import PIcon from './images/icon-pinterest.svg';
import IIcon from './images/icon-instagram.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);

        if (!isValidEmail(inputValue)){
            setError('Please insert a valid email');
        } else {
            setError(null);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container fluid id='footer' className='p-5'>
            <Row className=''>
                <Col sm={{ span: 12 }} 
                     lg={{ span: 3 }} className='d-flex flex-column justify-content-between align-items-center align-items-lg-start'>
                    <Image  src={ImgLogo} alt='logo' className='m-1' />
                    <ButtonGroup id='socLinks' className='m-1'>
                        <Button variant='custom' className='' target="_blank" href='https://www.facebook.com/'><Image src={FBIcon} alt='icon' /></Button>
                        <Button variant='custom' className='' target="_blank" href='https://www.youtube.com/'><Image src={YTIcon} alt='icon' /></Button>
                        <Button variant='custom' className='' target="_blank" href='https://www.twitter.com/'><Image src={TIcon} alt='icon' /></Button>
                        <Button variant='custom' className='' target="_blank" href='https://www.pinterest.com/'><Image src={PIcon} alt='icon' /></Button>
                        <Button variant='custom' className='' target="_blank" href='https://www.instagram.com/'><Image src={IIcon} alt='icon' /></Button>
                    </ButtonGroup>
                </Col>
                <Col sm={{ span: 12 }} 
                     lg={{ span: 6 }} className=''>
                    <ButtonToolbar className='justify-content-around'>
                        <ButtonGroup vertical className=''>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Home</Button>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Pricing</Button>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Products</Button>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>About Us</Button>
                        </ButtonGroup>
                        <ButtonGroup vertical className='mb-auto'>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Careers</Button>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Community</Button>
                            <Button variant='custom' className='cs-btn4 m-1 text-start' href='#'>Privacy Policy</Button>
                        </ButtonGroup>
                    </ButtonToolbar >
                 </Col>
                 <Col sm={{ span: 12 }} 
                      lg={{ span: 3 }} className='d-flex flex-column justify-content-between align-items-center align-items-lg-start'>
                    <Form  id='sub' className='d-flex justify-content-between align-self-center align-self-lg-end' onSubmit={handleSubmit}>
                        <Form.Control id='email'
                            name='email'
                            value={email}
                            onChange={handleChange} 
                            className='rounded-pill' 
                            type="mail" 
                            placeholder="Updates in your inbox..." />
                        {error && <Form.Text className='cs-h6'>{error}</Form.Text>}
                        <Button variant='custom' className='cs-btn3 rounded-pill' type="submit">Go</Button>
                    </Form>
                    <p className='align-self-center align-self-lg-end mt-4'>Copyright 2020. All Rights Reserved</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;