import React, { Component } from 'react';
import banner from '../images/banner.png';
import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import loveIcon from '../images/loveIcon.png';
import '../styles/ClassList.css';

class ClassHeader extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            is_liked: false,
            received_like: '',
            classId: this.props.match.params.classId,
        };
        console.log(this.state)

    }

    componentWillMount() {
        this.setState({
            received_like: this.props.obj.received_like,
        }, function() {
            console.log(this.state.received_like);
        });
    }

    handleClick() {
        this.setState({
            is_liked: !this.state.is_liked,
        }, function() {
            console.log(this.state);
            if (this.state.is_liked) {
                this.setState({
                    received_like: parseInt(this.state.received_like) + 1
                });
            } else {
                this.setState({
                    received_like: parseInt(this.state.received_like) - 1
                });
            }
        });
    }

    render(){
        return(
            <div>
                <div className="firstRow">
                    <span className="firstRowLeft">光电学院</span>
                    <span className="loveNum">{this.state.received_like}</span>
                    <span className="firstRowRight">
                        <img src={loveIcon} onClick={this.handleClick}/>
                    </span>
                </div>

                <div className="secondRow">
                    <span className="secondRowLeft">光电学院</span>
                    <span className="place"></span>
                    <span className="secondRowRight">
                        <img src={rankIcon}/>
                    </span>
                </div>
            </div>
        )
    }
}

export default ClassHeader;