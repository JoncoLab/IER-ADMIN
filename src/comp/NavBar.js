import React, { Component } from "react";
import {NavItem} from "./NavItem";

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <NavItem text="Новини" tabId="news"/>
                <NavItem text="Розклад" tabId="schedule"/>
                <NavItem text="Файли" tabId="files"/>
                <NavItem text="Текста" tabId="texts"/>
            </nav>
        );
    }
}