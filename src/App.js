import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./comp/NavBar";
import {Content} from "./comp/Content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "news"
        };
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(newTabId) {
        this.setState({
            currentTab: newTabId
        });
    }
    render() {
        return (
            <div className="App">
                <img
                    src={logo}
                    alt="react-logo"
                    className="logo"
                />
                <NavBar changeTab={this.changeTab}/>
                <Content tabId={this.state.currentTab}/>
            </div>
        );
    }
}

export default App;
