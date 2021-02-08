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


export default class MyHeader extends React.Component {
    render(){
        return(
        <header>
        <div className='header-left'>
        <img alt='logo' src={logo} />
        <div className='header'>Delicious</div>
        <div>THE BEST FOOD BLOG ON THE WEB.</div>
        </div>
        <div className='header-right'>
        <img alt='fb' src={fb} />
        <img alt='twitter' src={twitter} />
        <img alt='google' src={google} />
        <img alt='instagram' src={instagram} />
        <img alt='flic' src={flic} />
        <img alt='pinterest' src={pinterest} />
        <img alt='wifi' src={wifi} />
        <img alt='mail' src={mail} />
        </div>
        </header>
        )
    }
}