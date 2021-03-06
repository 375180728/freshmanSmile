import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route } from 'react-router-dom';

import '../styles/ShowList.css';

import rankIcon from '../images/rankIcon.png';
import scoreIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


class HotItem extends Component{
    constructor(props) {
        super(props)
        this.match = this.props.match;
    }

    render(){
        if(!this.props.obj){
            return (<div></div>)
        }
        const obj = this.props.obj;
        const rowID = this.props.rowID;
        const index = this.props.index;
        const match = this.match;
        console.log(obj)
        return(
            <div className="showListItem" key={rowID}>
                <div className="headImg">
                    <img src={obj.img_url}/>
                </div>
                <div className="photoInfo">
                    <div className="classNum">{obj.class_id}</div>
                    <div className="college">{obj.college}</div>
                    <div className="rankAndNice">                        
                        <span className="nice">
                            <img className="niceIcon" src={scoreIcon}/>
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