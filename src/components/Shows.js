import React from 'react';
import { Route, Link } from 'react-router-dom';

import Tabs from './Tabs';
import NavBar from './NavBar'

import Item from './Item';
import NewList from './NewList';

const Shows = ({match}) => (
    <div>
        <Tabs/>
        
        <Route path={`${match.url}/:ItemId`} component={Item}/>
    </div>
);

export default Shows