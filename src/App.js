import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import Shows from './components/Shows';
import TakePic from './components/TakePic';
import About from './components/About';
import Tabs from './components/Tabs';
import ClassList from './components/ClassList';
import OldTakePic from './components/OldTakePic';
import OldAbout from './components/OldAbout';
import axios from 'axios';

import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "wechat_info": {
                    "openid": "ouRCyjpYbjwuHt2n7CjpOPnh0Sec",
                    "nickname": "kjj",
                    "headimgurl": "https://avatars3.githubusercontent.com/u/323234?s=460&v=4"
                },
                "stu_info": {
                    "college": "软件工程",
                    "class_received_like": 0,
                    "major": "软件工程",
                    "stuId": "2016214223",
                    "left_class_like": 9,
                    "class_score": 0,
                    "class_id": "13001609",
                    "name": "匡俊嘉"
                },
                "smile_info": null
            },
            isFreshman: '',
        };
    }

    componentWillMount() {
        const that = this;
        axios({
            method: 'get',
            url: 'https://wx.redrock.team/orientation-plus/indv/info',
        }).then(function(res) {
            that.setState({
                data: res.data.data,
            }, function() {
                console.log(this.state);
                this.stuId = that.state.data.stu_info.stuId.substring(0, 4);
                if (this.stuId == 2018) {
                    that.setState({
                        isFreshman: true,
                    }, function() {
                        console.log(this.state);
                    });
                } else {
                    that.setState({
                        isFreshman: false,
                    }, function() {
                        console.log(this.state);
                    });
                }
            });
        });

    }


    render() {
        console.log(this.state)
        let isFreshman = this.state.isFreshman;
        let classId = this.state.data.stu_info.class_id;
        let stuId = this.state.data.stu_info.stuId;
        console.log(stuId);
        console.log(classId);
        let takeRoute = null;
        if (isFreshman) {
            takeRoute = <Route exact path="/takepic" component={TakePic}/>;
        } else {
            takeRoute = <Route exact path="/takepic" component={OldTakePic}/>;
        }

        return (
            <Router>
                <div className="container">
                    <Switch>
                        {takeRoute}
                        <Route exact path="/shows" component={Tabs}/>
                        <Route exact path={`/shows/:classId`} component={ClassList}/>
                        <Route exact path="/about" component={OldAbout}/>
                        <Redirect path="/" to={{
                pathname: '/shows'
            }} /> 
                    </Switch>
                    <NavBar classId={classId} stuId={stuId}/>
                </div>
            </Router>
            );
    }
}

export default App