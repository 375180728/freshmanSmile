import React, { Component } from 'react';
import '../styles/OldTakePic.css';
import smileIcon from '../images/smileIcon.png';

import '../styles/OldTakePic.css'


class OldTakePic extends Component{
    render(){
        return(
            <div className="oldContainer">
                <div className="smileIcon">
                    <img src={smileIcon}/>
                </div>
                <div className="sug">
                    <div className="sugFirst">只有萌新才可以晒照哦</div>
                    <div className="sugSecond">快去给他们点赞吧</div>
                </div>
            </div>
        )
    }
}

export default OldTakePic;