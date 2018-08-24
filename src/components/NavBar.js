import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import selectedShows from '../images/selectedShows.png';
import selectedMine from '../images/selectedMine.png';
import selectedTakePic from '../images/selectedTakePic.png';
import mine from '../images/mine.png';
import takePic from '../images/takePic.png';
import shows from '../images/shows.png';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import '../styles/NavBar.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        };
    }
    render() {
        return (
            <div style={{
                position: 'fixed',
                height: '2.2rem',
                width: '100%',
                bottom: 0
            }}>
        <TabBar
            unselectedTintColor="#bbbbbb"
            tintColor="#ff926b"
            barTintColor="#f9f9f9"
            tabBarPosition="bottom"
            hidden={this.state.hidden}
            prerenderingSiblingsNumber={0}
            >
          <TabBar.Item
            title="风采展示"
            key="Shows"
            icon={<div style={{
                width: '0.7rem',
                height: '0.6rem',
                background: 'url(' + shows + ') center center /  0.7rem 0.6rem no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
                width: '0.7rem',
                height: '0.6rem',
                background: 'url(' + selectedShows + ') center center /  0.7rem 0.6rem no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
                this.props.history.push("/shows");
                this.setState({
                    selectedTab: 'blueTab',
                });
            }}
            data-seed="logId"
            >
          </TabBar.Item>
          <TabBar.Item
            icon={
            <div style={{
                marginTop: '-0.6rem',
                width: '1.2rem',
                height: '1.2rem',
                zIndex: '100',
                background: 'url(' + takePic + ') center center /  1.2rem 1.2rem no-repeat'
            }}
            />
            }
            selectedIcon={
            <div style={{
                marginTop: '-0.6rem',
                width: '1.2rem',
                height: '1.2rem',
                zIndex: '100',
                background: 'url(' + selectedTakePic + ') center center /  1.2rem 1.2rem no-repeat'
            }}
            />
            }
            title="晒笑脸"
            key="takePic"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
                this.props.history.push("/takepic");
                this.setState({
                    selectedTab: 'redTab',
                });
            }}
            data-seed="logId1"
            >
          </TabBar.Item>
          <TabBar.Item
            icon={
            <div style={{
                width: '0.6rem',
                height: '0.6rem',
                background: 'url(' + mine + ') center center /  0.6rem 0.6rem no-repeat'
            }}
            />
            }
            selectedIcon={
            <div style={{
                width: '0.6rem',
                height: '0.6rem',
                background: 'url(' + selectedMine + ') center center /  0.6rem 0.6rem no-repeat'
            }}
            />
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
                this.props.history.push("/about");
                this.setState({
                    selectedTab: 'greenTab',
                });
            }}
            >
          </TabBar.Item>
        </TabBar>
      </div>
            );
    }
}

export default withRouter(NavBar);