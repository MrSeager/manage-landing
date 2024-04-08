import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ImgIll from './images/illustration-intro.svg';

const Section_1 = () => {
    return (
        <section id='s1' className='container m-5 row'>
            <div className='col-md-5 d-flex flex-column justify-content-center'>
                <h1 className=''>Bring everyone together to build better products.</h1>
                <p className=''>Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.</p>
                <button className='cs-btn'>Get Started</button>
            </div>
            <div className='col-md-5 ms-md-auto'>
                <img src={ImgIll} alt='Illustration' className='img-fluid float-end' />
            </div>
        </section>
    );
};

export default Section_1;