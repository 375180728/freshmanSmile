import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route } from 'react-router-dom';

import '../styles/ShowList.css';

import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


class HotItem extends Component{
    constructor(props) {
        super(props)
        this.match = this.props.match;
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
        const match = this.match;
        return(
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
                                <img className="niceIcon" src={niceNumIcon}/>
                                <span className="niceNum">{obj.score}</span>
                            </span>
                            <span className="rank">
                                <img className="rankIcon" src={rankIcon}/>
                                <span className="rankNum">No.{index}</span>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

        )
    }
}

export default HotItem;