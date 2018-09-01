import React, { Component } from 'react';
import banner from '../images/banner.png';
import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import loveIcon from '../images/loveIcon.png';
import noLoveIcon from '../images/noLoveIcon.png';
import waiting from '../images/waiting.png';
import '../styles/ClassList.css';

import axios from 'axios';


class ClassHeader extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            is_liked: '',
            received_like: '',
            classId: '',
            rank: '',
            college: '',
        };
        console.log(this.props.obj);
    }

    componentDidMount() {
        this.setState({
            received_like: this.props.obj.received_like,
            is_liked: this.props.obj.is_liked,
            classId: this.props.obj.class_id,
            rank: this.props.obj.class_rank,
            college: this.props.obj.college,
        }, function() {
            console.log(this.state);
        });
    }

    handleClick() {
        // var that = this;
        // console.log('nice')
        // axios({
        //     method: 'post',
        //     url: 'https://wx.idsbllp.cn/orientation-plus/class/like',
        //     params: {
        //         class_id: this.state.classId
        //     }
        // }).then(function(res){
        //     console.log(res.data);
        //     that.setState({
        //         is_liked: !that.state.is_liked,
        //     },function(){
        //         if(that.state.is_liked) {
        //             that.setState({
        //                 received_like: parseInt(this.state.received_like) + 1,
        //             })
        //         } else {
        //             that.setState({
        //                 received_like: parseInt(this.state.received_like) - 1,
        //             })
        //         }
        //     })
        // })
        this.setState({
            is_liked: !this.staet.is_liked,
        },function(){
            if(this.state.is_liked){
                this.setState({
                    received_like: parseInt(this.state.received_like) + 1,
                })
            } else {
                this.setState({
                    received_like: parseInt(this.state.received_like) - 1,
                })
            }
        })
    }

    render() {
        if(!this.state.rank){
            return (<div className="waiting"><img src={waiting}/></div>)
        }
        if(this.state.rank < 0){
            this.setState({
                rank: 0,
            })
        }
        let lovesIcon = null
        const is_liked = this.state.is_liked;
        console.log(is_liked);
        if(is_liked){
            lovesIcon = <img src={loveIcon}/>
        }else{
            lovesIcon = <img src={noLoveIcon}/>
        }
        return (
            <div>
                <div className="firstRow">
                    <span className="firstRowLeft">{this.state.college}</span>
                    <span className="firstRowM">{this.state.classId}</span>
                    <span className="firstRowRight">
                        <span className="lovesIcon" onClick={this.handleClick}>
                            {lovesIcon}
                        </span>
                        <span className="loveNum">{this.state.received_like}</span>
                        <span className="place">{this.state.rank}</span>
                        <img src={rankIcon}/>
                    </span>
                </div>
            </div>
            );
    }
}

export default ClassHeader;