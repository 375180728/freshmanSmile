import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/ShowList.css'

import rankIcon from '../images/rankIcon.png'
import niceNumIcon from '../images/niceNumIcon.png'

class ShowList extends Component{
    render(){
        return(
            <div className="showListItem">
                <div className="headImg">

                </div>
                <div className="photoInfo">
                    <div className="classNum">02111605</div>
                    <div className="college">光电工程学院</div>
                    <div className="major">电子工程</div>
                    <div className="rankAndNice">                        
                        <span className="nice">
                            <img className="niceIcon" src={niceNumIcon}/>
                            <span className="niceNum">111</span>
                        </span>
                        <span className="rank">
                            <img className="rankIcon" src={rankIcon}/>
                            <span className="rankNum">No.1111</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowList;