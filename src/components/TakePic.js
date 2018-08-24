import React, { Component } from 'react';

import '../styles/TakePic.css'

import upload from '../images/upload.png'
import addIcon from '../images/addIcon.png' 

class TakePic extends Component{    
    render(){
        return(
            <div className="showContainer">
                <div className="showOneShow">
                    <div className="showTitle">晒一晒</div>
                    <div className="addPhoto">
                        <div className="addIcon">
                            <img src={addIcon}/>
                        </div>
                        <div className="addWord">晒过以后就可以点赞啦~</div>
                    </div>
                    <div className="nickName">
                        <span>昵称</span>
                        <input className="nickNameWord" type="text" placeholder="（限10字以内）"/>
                    </div>
                    <div className="description">
                        <span>简介</span>
                        <textarea className="descriptionWord">
                        </textarea>
                    </div>
                </div>
                <div className="upload">
                    <img className="uploadButton" src={upload}/>
                </div>
            </div>
        )
    }
}

export default TakePic;