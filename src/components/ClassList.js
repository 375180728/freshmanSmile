import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';
import { Route } from 'react-router-dom';


import '../styles/ClassList.css';

import ClassItem from './ClassItem';
import ClassHeader from './ClassHeader';
import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import loveIcon from '../images/loveIcon.png';


class ClassList extends Component {
    constructor(props) {
        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });


        this.state = {
            dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight * 3 / 4,
            data: []
        };

        
        this.match = this.props.match;
        this.NUM_SECTIONS = 3;
        this.NUM_ROWS_PER_SECTION = 4;
        this.dataBlobs = {};
        this.pageIndex = 0;
        this.sectionIDs = [];
        this.rowIDs = [];
    }

    componentDidMount() {
        var that = this;
        axios({
            method: 'get',
            url: 'https://wx.redrock.team/orientation-plus/class/list/info?class_id='+ {this.match.url.prams.classId},
        }).then(function(res) {
            console.log(res.data)
            that.setState({
                data: res.data.data 
            }) 
        });
        this.data = this.state.data.stu_info;

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            this.genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlobs, this.sectionIDs, this.rowIDs),
                isLoading: false,
                height: hei,
            });
        }, 600);
    }

    genData(pIndex = 0) {
        for (let i = 0; i < this.NUM_SECTIONS; i++) {
            const ii = (pIndex * this.NUM_SECTIONS) + i;
            const sectionName = `Section ${ii}`;
            this.sectionIDs.push(sectionName);
            this.dataBlobs[sectionName] = sectionName;
            this.rowIDs[ii] = [];

            for (let jj = 0; jj < this.NUM_ROWS_PER_SECTION; jj++) {
                const rowName = `S${ii}, R${jj}`;
                this.rowIDs[ii].push(rowName);
                this.dataBlobs[rowName] = rowName;
            }
        }
        this.sectionIDs = [...this.sectionIDs];
        this.rowIDs = [...this.rowIDs];
    }



    onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event);
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            this.genData(++this.pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlobs, this.sectionIDs, this.rowIDs),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
            key={`${sectionID}-${rowID}`}
            style={{
                backgroundColor: '#f4f4f4',
                height: 12,
            }}
            />
        );
        let index = 0;
        const row = (rowData, sectionID, rowID) => {
            if (index > this.stu_data.length - 1) {
                index = 0;
            }
            const obj = this.state.stu_data[index];
            index++;
            return (
                <ClassItem obj={obj} index={index} rowID={rowID} match={this.match}/>
                );
        };

        return (
            <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderRow={row}
            renderSeparator={separator}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}
            renderHeader={() => <ClassHeader obj={this.json.data.class_info} match={this.match}/>}
            pageSize={10}
            onScroll={() => {
                console.log('scroll');
            }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
            />
            );
    }
}

export default ClassList;