import React, { Component } from 'react';
import axios from 'axios';

import '../styles/TakePic.css';

import upload from '../images/upload.png';
import addIcon from '../images/addIcon.png';
import cameraIcon from '../images/cameraIcon.png';
import nickNameIcon from '../images/nickNameIcon.png';
import decIcon from '../images/decIcon.png';
import Cropper from 'react-cropper';


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
            file: '',
            isAdded: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }   

    handleClick(){
        if(!this.state.nickName){
            alert('请输入你的昵称')
            return;
        }
        if(!this.state.description){
            alert('请输入你的大学感言')
            return;
        }

        if(this.state.nickName.length > 5){
            alert('昵称不超过五个字哦');
            return;
        }

        if(this.state.description.length > 20){
            alert('大学感言不超过二十个字哦');
            return;
        }

        console.log(this.state);

        const imgdata = new FormData();
        console.log(this.state.file);

        imgdata.append("nickname", this.state.nickName);
        console.log(imgdata.get("nickname"))
        imgdata.append("descp", this.state.description);
        imgdata.append("image", this.state.file);
        console.log(imgdata.get("image"));

        axios({
            method: 'post',
            url: 'https://wx.redrock.team/orientation-plus/indv/upload',
            data: imgdata,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
        }).then(function(res) {
            alert(res.msg)
        }).catch(function(error){
            alert(error);
        });
    }

    handleInputChange(event){
        this.setState({
            nickName: event.target.value,
        })
    }

    handleTextChange(event){
        this.setState({
            description: event.target.value,
        })
    }

    handleFileChange(event){
        const file = event.target.files[0];
        console.log(file)
        this.setState({
            file: file,
        },function(){
            console.log(this.state)
        })

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
                    <div className="showTitle">
                        <span className="cameraIcon" >
                            <img src={cameraIcon}/>
                        </span>
                        <span className="titleWord">晒一晒</span>
                    </div>
                    {addIcon}
                    <div className="nickName">
                        <div>
                            <span className="nickNameIcon">
                                <img src={nickNameIcon}/>
                            </span>
                            <span className="nickNameText">昵称</span>
                        </div>
                        <input className="nickNameWord" type="text" placeholder="限5字内" onChange={this.handleInputChange} value={this.state.nickName}/>
                    </div>
                    <div className="description">
                        <div>
                            <span className="decIcon">
                                <img src={decIcon}/>
                            </span>
                            <span className="decText">大学感言</span>
                        </div>
                        <textarea className="descriptionWord" type="text" placeholder="限20字以内" onChange={this.handleTextChange} value={this.state.description}>
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