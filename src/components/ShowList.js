import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/ShowList.css'

import rankIcon from '../images/rankIcon.png'
import niceNumIcon from '../images/niceNumIcon.png'

class ShowList extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props.data;
        console.log(data);
        return(
            <div className="showListItem">
                <div className="headImg">
                    
                </div>
                <div className="photoInfo">
                    <div className="classNum">{data.class_id}</div>
                    <div className="college">{data.college}</div>
                    <div className="major">{data.major}</div>
                    <div className="rankAndNice">                        
                        <span className="nice">
                            <img className="niceIcon" src={niceNumIcon}/>
                            <span className="niceNum">111</span>
                        </span>
                        <span className="rank">
                            <img className="rankIcon" src={rankIcon}/>
                            <span className="rankNum">No.101</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowList;