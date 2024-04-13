import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

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
        <footer className='container-fluid p-5'>
            <img src={ImgLogo} alt='logo' className='img-fluid m-1' />
            <div id='links' className='d-flex flex-row justify-content-between align-items-start'>
                <div className='btn-group-vertical'>
                    <a className='m-1' href='#'>Home</a>
                    <a className='m-1' href='#'>Pricing</a>
                    <a className='m-1' href='#'>Products</a>
                    <a className='m-1' href='#'>About Us</a>
                </div>
                <div className='btn-group-vertical'>
                    <a className='m-1' href='#'>Careers</a>
                    <a className='m-1' href='#'>Community</a>
                    <a className='m-1' href='#'>Privacy Policy</a>
                </div>
            </div>
            <form id='sub' className='d-flex justify-content-between justify-self-end' onSubmit={handleSubmit}>
                <input id='email'
                       name='email'
                       value={email}
                       onChange={handleChange} 
                       className='cs-input' 
                       type="mail" 
                       placeholder="Updates in your inbox..." />
                {error && <h6 className='cs-h6'>{error}</h6>}
                <button className='cs-btn3' type="submit">Go</button>
            </form>
            <div id='socLinks' className='container-flued d-flex justify-content-between'>
                <a className='' target="_blank" href='https://www.facebook.com/'><img src={FBIcon} alt='icon' /></a>
                <a className='' target="_blank" href='https://www.youtube.com/'><img src={YTIcon} alt='icon' /></a>
                <a className='' target="_blank" href='https://www.twitter.com/'><img src={TIcon} alt='icon' /></a>
                <a className='' target="_blank" href='https://www.pinterest.com/'><img src={PIcon} alt='icon' /></a>
                <a className='' target="_blank" href='https://www.instagram.com/'><img src={IIcon} alt='icon' /></a>
            </div>
            <p className='justify-self-end align-self-end'>Copyright 2020. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;