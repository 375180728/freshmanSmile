import React, { Component } from 'react';
import ReactDOM from 'react-dom';



import '../styles/ShowList.css';

import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


class HotItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false,
            score: '',
        };
    }
    render(){
        const obj = this.props.obj;
        console.log(obj)
        const rowID = this.props.rowID;
        const index = this.props.index;
        return(
            <div className="showListItem" key={rowID}>
                <div className="headImg">
                    
                </div>
                <div className="photoInfo">
                    <div className="classNum">{obj.class_id}</div>
                    <div className="college">{obj.college}</div>
                    <div className="major">{obj.major}</div>
                    <div className="rankAndNice">                        
                        <span className="nice">
                            <img className="niceIcon" src={niceNumIcon} onClick={this.handleClick}/>
                            <span className="niceNum">{obj.score}</span>
                        </span>
                        <span className="rank">
                            <img className="rankIcon" src={rankIcon}/>
                            <span className="rankNum">No.{index}</span>
                        </span>
                    </div>
                </div>
            </div>

        )
    }
}

export default HotItem;