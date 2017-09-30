import React, { Component } from "react";
import {NavItem} from "./NavItem";

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(newTabId) {
        this.props.changeTab(newTabId)
    }
    render() {
        return (
            <nav id="main-menu"
                 style={{
                     display: "flex",
                     flexDirection: "column",
                     alignSelf: "center"
                 }}
            >
                <NavItem onTabChange={this.changeTab} text="Новини" tabId="news"/>
                <NavItem onTabChange={this.changeTab} text="Розклад" tabId="schedule"/>
                <NavItem onTabChange={this.changeTab} text="Файли" tabId="files"/>
                <NavItem onTabChange={this.changeTab} text="Текста" tabId="texts"/>
            </nav>
        );
    }
}