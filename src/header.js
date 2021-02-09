import React from 'react';
import logo from './logo.png';
import fb from './fb-icon.png';
import twitter from './twit-icon.png';
import google from './gp-icon.png';
import instagram from './insta-icon.png';
import flic from './flic-icon.png';
import pinterest from './pint-icon.png';
import wifi from './rss-icon.png';
import mail from './mail-icon.png';
import './header.css';


export default class MyHeader extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className='header-left'>
                        <img className='logoImg' alt='logo' src={logo} />
                        <div>
                            <h2 className='header'>Delicious</h2>
                            <div className='subheaderText'>THE BEST FOOD BLOG ON THE WEB.</div>
                        </div>
                    </div>
                    <div className='Button-List'>
                        <input type='image' alt='fb' src={fb} />
                        <input type='image' alt='twitter' src={twitter} />
                        <input type='image' alt='google' src={google} />
                        <input type='image' alt='instagram' src={instagram} />
                        <input type='image' alt='flic' src={flic} />
                        <input type='image' alt='pinterest' src={pinterest} />
                        <input type='image' alt='wifi' src={wifi} />
                        <input type='image' alt='mail' src={mail} />
                    </div>
                </header>
                <hr></hr>
            </div>
        )
    }
}