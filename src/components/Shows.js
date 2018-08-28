import React from 'react'; 
import { Route, Link } from 'react-router-dom';

import Tabs from './Tabs';
import NavBar from './NavBar'

import NewList from './NewList';

const Shows = ({match}) => (
    <div>
        <Tabs match={match}/>
    </div>
);

export default Shows;