import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef } from 'react';

import {Container, Nav, Navbar, Button, Image} from 'react-bootstrap';

import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';
import Section_4 from './Section_4';
import Footer from './Footer';

import ImgLogo from './images/logo.svg';

const MainPage = () => {
  const parentRef = useRef(null)

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);   
    }
  }, [parentRef]);

  return (
    <main ref={parentRef}>
      <Navbar expand="lg" className="mt-5">
        <Container>
          <Navbar.Brand className='cs-img' href="#">
            <Image src={ImgLogo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsibleNavbar" className='custom-toggler' />
          <Navbar.Collapse id="collapsibleNavbar" className='cs-collapse'>
            <Nav className="cs-nav mx-auto">
              <Nav.Link className='cs-a align-self-center' href="#">Pricing</Nav.Link>
              <Nav.Link className='cs-a align-self-center' href="#">Product</Nav.Link>
              <Nav.Link className='cs-a align-self-center' href="#">About Us</Nav.Link>
              <Nav.Link className='cs-a align-self-center' href="#">Careers</Nav.Link>
              <Nav.Link className='cs-a align-self-center' href="#">Community</Nav.Link>
            </Nav>
            <Button variant='custom' className="cs-btn rounded-pill">Get Started</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
    </main>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
