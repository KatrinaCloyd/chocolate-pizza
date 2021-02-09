import React from 'react';
import van from './van-pic.png';
import logo from './logo.png';
import './footer.css'

export default class MyHeader extends React.Component {
    render(){
        return(
            <div>
                <hr></hr>
                <div className='footer'>
                    <div className='profile'>
                        <img className='pic' alt='van' src={van} />
                        <div>
                            <h3>Vanessa Stevenson</h3>
                            <p className='quote'>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                        </div>
                        <button className='share-button'>SHARE RECIPE</button>
                    </div>

                    <div className='legal-stuff'>
                    <img className='icon' alt='logo' src={logo} />
                        <h6>Delicious &#169; 2013 &bull; All Rights Reserved.
                        </h6>
                        <h6>
                            Proudly publish with Ghost.
                        </h6>
                    </div>
                </div>
            </div>

        )
    }
}