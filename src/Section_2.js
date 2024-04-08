import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Section_2 = () => {
    return (
        <section id='s2' className='container m-5 row'>
            <div className='col-md-5'>
                <h2 className=''>What’s different about Manage?</h2>
                <p>Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. </p>
            </div>
            <div className='col-md-5 ms-md-auto'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='badge rounded-pill'>01</span>
                        <h3 className='h4'>Track company-wide progress</h3>
                        <p className=''>See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.</p>
                    </li>
                    <li className='list-group-item'>
                        <span className='badge rounded-pill'>02</span>
                        <h3 className='h4'>Advanced built-in reports</h3>
                        <p>Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.</p>
                    </li>
                    <li className='list-group-item'>
                        <span className='badge rounded-pill'>03</span>
                        <h3 className='h4'>Everything you need in one place</h3>
                        <p>Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Section_2;