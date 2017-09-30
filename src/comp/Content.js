import React, { Component } from "react";
import {News} from "./News";
import {Schedule} from "./Schedule";
import {Files} from "./Files";
import {Texts} from "./Texts";

export class Content extends Component {
    render(tabId) {
        let targetTab;
        switch (tabId) {
            case "news":
                targetTab = <News/>;
                break;
            case "schedule":
                targetTab = <Schedule/>;
                break;
            case "files":
                targetTab = <Files/>;
                break;
            case "texts":
                targetTab = <Texts/>;
                break;
            default:
                targetTab = <News/>;
        }
        return targetTab;
    }
}