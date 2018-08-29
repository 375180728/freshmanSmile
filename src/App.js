import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Shows from './components/Shows';
import TakePic from './components/TakePic';
import About from './components/About';
import Tabs from './components/Tabs';
import ClassList from './components/ClassList';

import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Redirect path="/" to={{pathname: '/shows'}} />
                    <Route exact path="/shows" component={Tabs}/>
                    <Route exact path="/takepic" component={TakePic}/>    
                    <Route exact path="/about" component={About}/>
                    <Route path={`/shows/:classId`} component={ClassList} />
                    <NavBar/>
                </div>
            </Router>
        )
    }
}

export default App