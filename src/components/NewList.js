import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';



import '../styles/ShowList.css';

import rankIcon from '../images/rankIcon.png';
import niceNumIcon from '../images/niceNumIcon.png';
import banner from '../images/banner.png';


function MyBody(props) {
    return (
        <div className="bannerContainer my-body">
      <img src={banner} className="banner"/>
      {props.children}
    </div>
        );
}

const json = {
    "status": 200,
    "code": 1,
    "data": [
        {
            "major": "软件工程",
            "college": "软件工程",
            "date": "2018-08-25T06:51:27.000+0000",
            "class_id": "13001609"
        },
        {
            "major": "通信工程",
            "college": "通信学院",
            "date": "2018-08-20T05:37:38.000+0000",
            "class_id": "01011603"
        },
        {
            "major": "测试专业",
            "college": "测试学院",
            "date": "2018-08-19T05:37:38.000+0000",
            "class_id": "test1"
        }
    ],
    "msg": "succeed"
};

const data = json.data;


const NUM_SECTIONS = 3;
const NUM_ROWS_PER_SECTION = 4;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const ii = (pIndex * NUM_SECTIONS) + i;
        const sectionName = `Section ${ii}`;
        sectionIDs.push(sectionName);
        dataBlobs[sectionName] = sectionName;
        rowIDs[ii] = [];

        for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
            const rowName = `S${ii}, R${jj}`;
            rowIDs[ii].push(rowName);
            dataBlobs[rowName] = rowName;
        }
    }
    sectionIDs = [...sectionIDs];
    rowIDs = [...rowIDs];
}

class NewList extends Component {
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
        };
    }

    componentDidMount() {
        // you can scroll to the specified position
        setTimeout(() => this.lv.scrollTo(0, 120), 800);

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
                height: hei,
            });
        }, 600);
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
            genData(++pageIndex);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
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
            if (index > data.length - 1) {
                index = 0;
            }
            const obj = data[index];
            index++;
            console.log(index);
            return (
                <div className="showListItem" key={rowID}>
                <div className="headImg">
                    
                </div>
                <div className="photoInfo">
                    <div className="classNum">{obj.class_id}班</div>
                    <div className="college">{obj.college}</div>
                    <div className="major">{obj.major}</div>
                    <div className="rankAndNice">                        
                        <span className="nice">
                            <img className="niceIcon" src={niceNumIcon}/>
                            <span className="niceNum">111</span>
                        </span>
                        <span className="rank">
                            <img className="rankIcon" src={rankIcon}/>
                            <span className="rankNum">No.101</span>
                        </span>
                    </div>
                </div>
            </div>
                );
        };

        return (
            <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderBodyComponent={() => <MyBody />}
            renderRow={row}
            renderSeparator={separator}
            style={{
                height: this.state.height,
                overflow: 'auto',
            }}
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

export default NewList;