import React, { Component } from "react";
import App from "../App";

export class NavItem extends Component {
    tabId = this.props.tabId;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const newTabId = this.tabId;
        this.onChange(newTabId)
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.text}
            </button>
        );
    }
}