import React, { Component } from 'react';
import banner from '../images/banner.png';
import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import loveIcon from '../images/loveIcon.png';
import noLoveIcon from '../images/noLoveIcon.png';
import '../styles/ClassList.css';

import axios from 'axios';

function love(props){
    return (
        <img src={props.src} onClick={props.onClick}/>
    )
}

function noLove(props){
    return (
        <img src={props.src} onClick={props.onClick}/>
    )
}

class ClassHeader extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            is_liked: false,
            received_like: '',
            classId: this.props.match.params.classId,
        };
        console.log(this.props.obj);
    }

    componentDidMount() {
        this.setState({
            received_like: this.props.obj.received_like,
        }, function() {
            console.log(this.state.received_like);
        });
    }

    handleClick() {
        console.log('nice')
        this.setState({
            is_liked: !this.state.is_liked,
        }, function() {
            if (this.state.is_liked) {
                this.setState({
                    received_like: parseInt(this.state.received_like) + 1
                }, function() {
                    axios({
                        method: 'post',
                        url: 'https://wx.redrock.team/orientation-plus/class/like',
                        data: {
                            class_id: this.state.classId
                        }
                    }).then(function(res) {
                        console.log(res.data);
                    });
                });
            } else {
                this.setState({
                    received_like: parseInt(this.state.received_like) - 1
                }, function() {
                    axios({
                        method: 'post',
                        url: 'https://wx.redrock.team/orientation-plus/class/cancel_like',
                        data: {
                            class_id: this.state.classId
                        }
                    }).then(function(res) {
                        console.log(res.data);
                    });
                });
            }
        });
    }

    render() {
        let lovesIcon = null
        const is_liked = this.is_liked;
        const click = this.handleClick;
        console.log(click);
        if(is_liked){
            lovesIcon = <love src={loveIcon} onClick={click}/>
        }else{
            lovesIcon = <img src={noLoveIcon} onClick={click}/>
        }
        return (
            <div>
                <div className="firstRow">
                    <span className="firstRowLeft">光电学院</span>
                    <span className="firstRowRight">
                        {lovesIcon}
                        <span className="loveNum">{this.state.received_like}</span>
                        <span className="place">10</span>
                        <img src={rankIcon}/>
                    </span>
                </div>
            </div>
            );
    }
}

export default ClassHeader;