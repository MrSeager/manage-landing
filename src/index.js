import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import autoAnimate from '@formkit/auto-animate';
import { useEffect, useRef, useState } from 'react';

import Section_1 from './Section_1';
import Section_2 from './Section_2';
import Section_3 from './Section_3';

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
      <header className='container m-5 navbar navbar-expand-sm justify-content-between'>
        <a className='navbar-brand' href="#">
          <img src={ImgLogo} alt='logo' className='img-fluid' />
        </a>
        <div className='conatiner-fluid'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href="#">Pricing</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Product</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">About Us</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Careers</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Community</a>
            </li>
          </ul>
        </div>
        <button className='cs-btn'>Get Started</button>
      </header>
      <Section_1 />
      <Section_2 />
      <Section_3 />
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
