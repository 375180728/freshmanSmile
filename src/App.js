import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

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
                    "stuId": "2018214223",
                    "left_class_like": 9,
                    "class_score": 0,
                    "class_id": "13001609",
                    "name": "匡俊嘉"
                },
                "smile_info": {
                    "img_url": "https://wx.idsbllp.cn/orientation/images/niyaowoyizhixiaome.jpg",
                    "nickname": "kjj的笑脸网名",
                    "descp": "kjj的笑脸描述"
                }
            },
            isFreshman: '',
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://wx.redrock.team/orientation-plus/indv/info',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(function(res) {
            console.log(res.data);
            this.setState({
                data: res.data.data,
            }, function() {
                console.log(this.state);
            });
        });

        this.stuId = this.state.data.stu_info.stuId.substring(0, 4);
        
        if (this.stuId == 2018) {
            this.setState({
                isFreshman: true,
            });
        } else {
            this.setState({
                isFreshman: false,
            });
        }

    }


    render() {
        let isFreshman = this.state.isFreshman;
        let classId = this.state.data.stu_info.class_id;
        console.log(classId)
        let takeRoute = null;
        let aboutRoute = null;
        if (isFreshman) {
            takeRoute = <Route exact path="/takepic" component={TakePic}/>
        } else {
            takeRoute = <Route exact path="/takepic" component={OldTakePic}/>
        }
        if (isFreshman) {
            aboutRoute = <Route exact path={`/shows/:classId`} component={ClassList}/>
        } else {
            aboutRoute = <Route exact path={`/shows/:classId`} component={OldAbout}/>
        }
        return (
            <Router>
                <div className="container">
                    <Redirect path="/" to={{
                pathname: '/shows'
            }} />
                    {takeRoute}
                    <Route exact path="/shows" component={Tabs}/>
                    {aboutRoute}
                    <NavBar classId={classId}/>
                </div>
            </Router>
            );
    }
}

export default App