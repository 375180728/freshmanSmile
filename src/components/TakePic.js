import React, { Component } from 'react';

import '../styles/TakePic.css';

import upload from '../images/upload.png';
import addIcon from '../images/addIcon.png';


function AddedPhoto(props) {
  return (
    <div className="addPhoto">
        <img className="preview" src={props.image}/>               
        <div className="addWord">晒过以后就可以点赞啦~</div>
    </div>
  );
}

function AddPhoto(props) {
  return (
    <div className="addPhoto">
        <div className="addIcon">
            <img className='adds' src={addIcon}/>
            <input onChange={props.onChange} type="file" name="image" accept="image/*" />
        </div>
        <div className="addWord">晒过以后就可以点赞啦~</div>
    </div>
  );
}

class TakePic extends Component {
    constructor(props) {
        super(props);
        this.state={
            nickName: '',
            description: '',
            image: '',
            isAdded: false,
            isLiked: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

    handleClick(){
        
    }

    handleInputChange(event){
        this.setState({
            nickName: event.target.value,
        })
        console.log(this.state);
    }

    handleTextChange(event){
        this.setState({
            description: event.target.value,
        })
        console.log(this.state);
    }

    handleFileChange(event){
        console.log(1)
        const file = event.target.files[0];
        const maxsize = 5000 * 1024;
        const uploadmax = 100 * 1024;
        // 检查文件类型
        if (['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split("/")[1]) < 0) {
            alert("文件格式不对");
            return;
        }
        // 文件大小限制
        if (file.size > maxsize) {
            alert("文件过大");
            return;
        }
        var reader  = new FileReader();
        var result;
        let that = this;
        reader.addEventListener("load", function () {
            result = reader.result;
            that.setState({
                image: result,
                isAdded: true,
            })
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }



    render() {  
            let addIcon = null;
            let isAdded = this.state.isAdded;
            if (isAdded) {
                addIcon = <AddedPhoto image={this.state.image}/>;
            } else {
                addIcon = <AddPhoto onChange={this.handleFileChange}/>;
            }
            return (
            <div className="showContainer">
                <div className="showOneShow">
                    <div className="showTitle">晒一晒</div>
                    {addIcon}
                    <div className="nickName">
                        <span>昵称</span>
                        <input className="nickNameWord" type="text" placeholder="（限5字以内）" onChange={this.handleInputChange} value={this.state.nickName}/>
                    </div>
                    <div className="description">
                        <span>简介</span>
                        <textarea className="descriptionWord" type="text" placeholder="（限20字以内）" onChange={this.handleTextChange} value={this.state.description}>
                        </textarea>
                    </div>
                </div>
                <div className="upload" onClick={this.handleClick}>
                    <img className="uploadButton" src={upload}/>
                </div>
            </div>
            );
    }
}

export default TakePic;