import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import NewList from './NewList';
import HotList from './HotList';
import ClassList from './ClassList';


import { Route } from 'react-router-dom'

import banner from '../images/banner.png';
import '../styles/Tabs.css';



class TabExample extends Component {

    constructor(props) {
        super(props);
        this.match = this.props.match;
        this.tabBarUnderlineStyle = {
            width: '25%',
            height: '0.12rem',
            backgroundColor: '#ff926b',
            border: '0',
            marginLeft: '1.25rem'
        };
        this.tabs = [
            {
                title: '最新'
            },
            {
            title: '最热'
            },
        ];
    }

    renderTabBar(props) {
        return (
            <Sticky>
                {({style}) => <div style={{
                    ...style,
                    zIndex: 1
                }}><Tabs.DefaultTabBar {...props} /></div>}
            </Sticky>
        );
    }


    render(){
        
        return(
            <div>
                <StickyContainer>
                    <Tabs tabs={this.tabs}
                        initalPage={'t2'}
                        renderTabBar={this.renderTabBar}
                        tabBarUnderlineStyle={this.tabBarUnderlineStyle}
                        tabBarActiveTextColor={'#ff926b'}
                        tabBarInactiveTextColor={'#404040'}
                        swipeable={true}
                        >
                        <NewList match={this.match}/>
                        <HotList match={this.match}/>
                    </Tabs>
                </StickyContainer>
            </div>
        )
    }
} 
    



export default TabExample;