import React from 'react';
import van from './van-pic.png';
import logo from './logo.png';

export default class MyHeader extends React.Component {
    render(){
        return(
            <div>
            <hr></hr>
            <img alt='van' src={van} />
            <h3>Vanessa Stevenson</h3>
            <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
            <button>SHARE RECIPE</button>
            <img alt='logo' src={logo} />
            <h6>Delicious &#169; 2013 &bull; All Rights Reserved.
            </h6>
            <h6>
                Proudly publish with Ghost.
            </h6>
            </div>

        )
    }
}