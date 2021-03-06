import React, {Component} from 'react'; 
import { Route, Link } from 'react-router-dom';

import searchIcon from '../images/searchIcon.png'
import '../styles/Search.css'

class Search extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleWordChange = this.handleWordChange.bind(this);
        this.state = {
            word: '',
        }
        this.match = props.match;
    }

    handleClick(){
        console.log(this.state.word);
        const url = `/${this.state.word}`;
        console.log(url);
        window.location.href += url;
    }

    handleWordChange(event){
        this.setState({
            word: event.target.value,
        })
    }

    render(){
        return (
            <div className="search">
                <input type="text" onChange={this.handleWordChange} value={this.state.word} placeholder="请输入班级号进行搜索"/>
                <span className="searchIcon">
                    <img src={searchIcon}/>
                </span>
                <span onClick={this.handleClick}>搜索</span>
            </div>
        )
    }
}

export default Search;