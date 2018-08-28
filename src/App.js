import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Shows from './components/Shows';
import TakePic from './components/TakePic';
import About from './components/About';

import NavBar from './components/NavBar';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Route path="/shows" component={Shows}/>
                    <Route path="/takepic" component={TakePic}/>    
                    <Route path="/about" component={About}/>
                    <NavBar/>
                </div>
            </Router>
        )
    }
}

export default App