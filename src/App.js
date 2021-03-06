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
            data: '',
            isFreshman: '',
        }
    }

    componentDidMount() {
        const that = this;
        axios({
            method: 'get',
            url: 'https://wx.idsbllp.cn/orientation-plus/indv/info',
        }).then(function(res) {
            that.setState({
                data: res.data.data,
            }, function() {
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
        if(!this.state.data){
            return (<div></div>)
        }   
        let isFreshman = this.state.isFreshman;
        let classId = this.state.data.stu_info.class_id;
        let stuId = this.state.data.stu_info.stuId;
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
                        <Route exact path="/shows" component={Shows}/>
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