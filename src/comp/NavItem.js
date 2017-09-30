import React, { Component } from "react";

class NavItem extends Component {
    tabId = this.props.tabId;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const newTabId = this.tabId;
        this.props.onTabChange(newTabId);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.text}
            </button>
        );
    }
}