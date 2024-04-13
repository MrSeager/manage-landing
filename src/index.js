import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      <Navbar expand="lg" className="cs-navbar">
        <Container>
          <Navbar.Brand className='cs-img' href="#">
            <img src={ImgLogo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="collapsibleNavbar" className='custom-toggler' />
          <Navbar.Collapse id="collapsibleNavbar">
            <Nav className="me-auto">
              {/* Menu items */}
              <Nav.Link className='cs-a' href="#">Pricing</Nav.Link>
              <Nav.Link className='cs-a' href="#">Product</Nav.Link>
              <Nav.Link className='cs-a' href="#">About Us</Nav.Link>
              <Nav.Link className='cs-a' href="#">Careers</Nav.Link>
              <Nav.Link className='cs-a' href="#">Community</Nav.Link>
            </Nav>
            <button className="cs-btn">Get Started</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
      <section id='s1'>

      </section>
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
