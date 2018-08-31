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

    timestampToTime(timestamp){
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        if(parseInt(M) < 10 ){
            M = M.substring(1,2)
        }
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes();
        var s = date.getSeconds();
        return M +'-'+D+h+m;
    }

    render() {
        if(!this.props.obj){
            return (<div></div>)
        }
        const obj = this.props.obj;
        console.log(obj);
        const rowID = this.props.rowID;
        const index = this.props.index;
        const time = this.timestampToTime(obj.date);
        const match = this.match;
        return (
            <div className="showListItem" key={rowID}>
                <Link to={`${match.url}/` + `${obj.class_id}`}>
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
