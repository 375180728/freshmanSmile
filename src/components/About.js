import React, { Component } from 'react';

import '../styles/About.css'

import niceIcon from '../images/niceIcon.png'
import loveIcon from '../images/loveIcon.png'
import classIcon from '../images/classIcon.png'
import rulesIcon from '../images/rulesIcon.png'

class About extends Component {
    render() {
        return (
            <div className="aboutContainer">
                <div className="header">
                    <div className="userinfo">
                        <div className="headPic">
                        </div>
                        <span className="username">骄傲的闪电</span>
                    </div>                    
                </div>
                <div className="myInfo">
                    <div className="firstCard">
                        <div className="icons">
                            <img src={classIcon}/>
                        </div>
                        <span className="myClass explain">我的班级</span>
                        <span className="getNice numbers">获赞425</span>
                    </div>
                    <div className="secondCard">
                        <ul className="niceList">
                            <li className="freeNice">
                                <div className="icons">
                                    <img src={loveIcon}/>
                                </div>
                                <span className="explain">剩余班级点赞次数</span>
                                <span className="freeNiceNum numbers">10</span>
                            </li>
                            <li className="getPraise">
                                <div className="icons">
                                    <img src={niceIcon}/>
                                </div>
                                <span className="explain">收到的赞</span>
                                <span className="getPraiseNum numbers">89</span>
                            </li>
                            <li className="rules">
                                <div className="icons">
                                    <img src={rulesIcon}/>
                                </div>
                                <span className="explain">活动规则</span>
                            </li>
                        </ul>
                        <div className="ruleWords">
                            <div className="ruleWord">获得一个赞积一分</div> 
                            <div className="ruleWord">晒一张照积8分</div> 
                            <div className="ruleWord">得分相加即为总分</div> 
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default About;