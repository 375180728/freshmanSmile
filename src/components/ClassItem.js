import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route } from 'react-router-dom';

import '../styles/ClassList.css';

import clockIcon from '../images/clockIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


class ClassItem extends Component {
    constructor(props) {
        super(props);
        this.match = this.props.match;
        console.log(this.match);
    }

    render() {
        if(!this.props.obj){
            return(<div></div>)
        }
        const obj = this.props.obj;
        const rowID = this.props.rowID;
        const match = this.match;
        const nickname = obj.nickname;
        const descp = obj.descp;
        const img_url = obj.img_url;
        return (
            <div className="classListItem" key={rowID}>
                <div className="headPhoto">
                    <img src={img_url}/>
                </div>
                <div className="nick">{nickname}</div>
                <div className="declaration">{descp}</div>
            </div>
        );
    }
}

export default ClassItem;