import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./comp/NavBar";
import {Content} from "./comp/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "News"
        };
    }
    static changeTab(newTabId) {

    }
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Content tabId={this.state.currentTab}/>
            </div>
        );
    }
}

export default App;
