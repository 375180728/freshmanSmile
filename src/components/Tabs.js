import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import React from 'react';

import ShowList from './ShowList'

import banner from '../images/banner.png';
import '../styles/Tabs.css';

function renderTabBar(props) {
    return (
        <Sticky>
            {({style}) => <div style={{
                ...style,
                zIndex: 1
            }}><Tabs.DefaultTabBar {...props} /></div>}
        </Sticky>
        );
}

const tabs = [
    {
        title: '最新'
    },
    {
        title: '最热'
    },
];

const tabBarUnderlineStyle = {
    width: '25%',
    height: '0.12rem',
    backgroundColor: '#ff926b',
    border: '0',
    marginLeft: '1.25rem'
};

const TabExample = () => (
    <div>
        <StickyContainer>
            <Tabs tabs={tabs}
    initalPage={'t2'}
    renderTabBar={renderTabBar}
    tabBarUnderlineStyle={tabBarUnderlineStyle}
    tabBarActiveTextColor={'#ff926b'}
    tabBarInactiveTextColor={'#404040'}
    swipeable={true}
    >
                
                <ShowList/>
                
                
                <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }}>
                    Content of second tab
                </div>
            </Tabs>
        </StickyContainer>
    </div>
);


export default TabExample;