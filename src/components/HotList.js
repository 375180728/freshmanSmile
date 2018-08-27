import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ListView } from 'antd-mobile';



import '../styles/ShowList.css';

import HotItem from './HotItem' 
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
            "major": "测试专业",
            "college": "测试学院",
            "class_id": "test1",
            "score": 219
        },
        {
            "major": "通信工程",
            "college": "通信学院",
            "class_id": "01011603",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
        {
            "major": "软件工程",
            "college": "软件工程",
            "class_id": "13001609",
            "score": 0
        },
    ],
    "msg": "succeed"
};

const data = json.data;

const NUM_SECTIONS = 4;
const NUM_ROWS_PER_SECTION = 5;
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

class HotList extends Component {
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

    handleClick(){
        // this.setState({
        //     isLiked: !this.state.isLiked,
        // })
        // console.log(this.state)
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.lv.scrollTo(0, 120), 800);

        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // simulate initial Ajax
        setTimeout(() => {
            genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
                isLoading: false,
                height: hei,
            });
            console.log(this.state.DataSource);
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
            index ++;
            console.log(rowID);
            return (
                    <HotItem obj={obj} rowID={rowID} index={index}/>
                )
            }

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
            pageSize={12}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
            />
            );
    }
}

export default HotList;