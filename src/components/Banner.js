import React, { Component } from 'react';
import banner from '../images/banner.png';

class Banner extends Component {
    render(){
        return(
            <div className="bannerContainer my-body">
                <img src={banner} className="banner"/>
            </div>
        )
    }
}

export default Banner;