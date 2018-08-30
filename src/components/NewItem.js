import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route } from 'react-router-dom';
import '../styles/ShowList.css';

import ClassList from './ClassList'

import clockIcon from '../images/clockIcon.png';
import scoreIcon from '../images/scoreIcon.png';
import banner from '../images/banner.png';


class NewItem extends Component {
    constructor(props) {
        super(props);
        this.match = this.props.match;
    }

    render() {
        const obj = this.props.obj;
        console.log(obj);
        const rowID = this.props.rowID;
        const index = this.props.index;
        if(obj == null){
            alert('暂时没人传照片');
            window.loaction.href = '/TakePic';
            return;
        }
        const time = obj.date.slice(5, 10);
        const match = this.match;
        return (
            <div className="showListItem" key={rowID}>
                <Link to={`${match.url}/` + `${obj.class_id}`}>
                    <div className="headImg"> 
                    </div>
                    <div className="photoInfo">
                        <div className="classNum">{obj.class_id}</div>
                        <div className="college">{obj.college}</div>
                        <div className="major">{obj.major}</div>
                        <div className="rankAndNice"> 
                            <span className="nice">
                                <img className="niceIcon" src={scoreIcon}/>
                                <span className="niceNum">{obj.score}</span>
                            </span> 
                            <span className="rank">
                                <img className="rankIcon" src={clockIcon}/>
                                <span className="rankNum">{time}</span>
                            </span>                       
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default NewItem;