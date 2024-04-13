import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import ImgAva1 from './images/avatar-anisha.png';
import ImgAva2 from './images/avatar-ali.png';
import ImgAva3 from './images/avatar-richard.png';
import ImgAva4 from './images/avatar-shanai.png';

const Section_3 = () => {

    return (
        <section id='s3' className='container-fluid d-flex flex-column align-items-center'>
            <h3 className='m-5'>What they’ve said</h3>
            <div className='overflow-auto row flex-nowrap' id='scrollThing'>
                <div className='card border-0 col-sm-5 m-3 text-center'>
                    <img src={ImgAva1} alt='avatar' className='card-img-top mx-auto' />
                    <div className='card-body'>
                        <h4 className='card-title'>Anisha Li</h4>
                        <p className='card-text'>“Manage has supercharged our team’s workflow. The ability to maintain 
                        ty on larger milestones at all times keeps everyone motivated.”</p>
                    </div>
                </div>
                <div className='card border-0 col-sm-5 m-3 text-center'>
                    <img src={ImgAva2} alt='avatar' className='card-img-top mx-auto' />
                    <div className='card-body'>
                        <h4 className='card-title'>Ali Bravo</h4>
                        <p className='card-text'>“We have been able to cancel so many other subscriptions since using 
                        Manage. There is no more cross-channel confusion and everyone is much 
                        more focused.”</p>
                    </div>
                </div>
                <div className='card border-0 col-sm-5 m-3 text-center'>
                    <img src={ImgAva3} alt='avatar' className='card-img-top mx-auto' />
                    <div className='card-body'>
                        <h4 className='card-title'>Richard Watts</h4>
                        <p className='card-text'>“Manage allows us to provide structure and process. It keeps us organized 
                        and focused. I can’t stop recommending them to everyone I talk to!”</p>
                    </div>
                </div>
                <div className='card border-0 col-sm-5 m-3 text-center'>
                    <img src={ImgAva4} alt='avatar' className='card-img-top mx-auto' />
                    <div className='card-body'>
                        <h4 className='card-title'>Shanai Gough</h4>
                        <p className='card-text'>“Their software allows us to track, manage and collaborate on our projects 
                        from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                    </div>
                </div>
            </div>
            <button className='cs-btn m-5'>Get Started</button>
        </section>
    );
};

export default Section_3;