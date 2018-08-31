import React from 'react'; 
import { Route, Link } from 'react-router-dom';

import Tabs from './Tabs';
import Search from './Search'



const Shows = ({match}) => (
    <div>
        <Search match={match}/>
        <Tabs match={match}/>
    </div>
);

export default Shows;