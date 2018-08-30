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
            data: {},
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
                this.stuId = this.state.data.stu_info.stuId.substring(0, 4);
                if (this.stuId == 2018) {
                    that.setState({
                        isFreshman: true,   
                    },function(){
                        console.log(this.state)
                    });
                } else {
                    this.setState({
                        isFreshman: false,
                    },function(){
                        console.log(this.state);
                    });
                }
            });
        });

    }


    render() {
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