import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link, Route } from 'react-router-dom';
import '../styles/ShowList.css';

import Classes from './Classes';
import clockIcon from '../images/clockIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


class NewItem extends Component {
    constructor(props) {
        super(props);
        this.match = this.props.match;
        console.log(this.match);
        this.state = {
            isLiked: false,
            score: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        console.log(this.props.obj.score);
        this.setState({
            score: this.props.obj.score,
        }, function() {
            console.log(this.state.score);
        });
    }

    handleClick() {
        console.log(1);
        this.setState({
            isLiked: !this.state.isLiked,
        }, function() {
            console.log(this.state);
            if (this.state.isLiked) {
                this.setState({
                    score: parseInt(this.state.score) + 1
                });
            } else {
                this.setState({
                    score: parseInt(this.state.score) - 1
                });
            }
        });
    }

    render() {
        const obj = this.props.obj;
        const rowID = this.props.rowID;
        const index = this.props.index;
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
                                <img className="niceIcon" src={niceNumIcon} onClick={this.handleClick}/>
                                <span className="niceNum">{this.state.score}</span>
                            </span> 
                            <span className="rank">
                                <img className="rankIcon" src={clockIcon}/>
                                <span className="rankNum">{time}</span>
                            </span>                       
                        </div>
                    </div>
                </Link>
                <Route path={`${match.url}/:ClassId`} component={Classes} />            
            </div>
        );
    }
}

export default NewItem;