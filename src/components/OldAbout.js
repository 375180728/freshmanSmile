import React, { Component } from 'react';
import '../styles/OldTakePic.css';
import smileIcon from '../images/smileIcon.png';


class OldAbout extends Component{
    render(){
        return(
            <div className="oldContainer">
                <div className="smileIcon">
                    <img src={smileIcon}/>
                </div>
                <div className="sug">
                    <div className="sugSecond">快去给他们点赞吧</div>
                </div>
            </div>
        )
    }
}

export default OldAbout;