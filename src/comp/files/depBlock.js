import React, { Component } from 'react';
import {DepFile} from "./depFile";
import {DepBtn} from "./depBtn";

export class DepBlock extends Component {
    render() {
        return (
            <div className="depBlock">
                <h2 className="depCaption">Department name</h2>
                <DepBtn />
                <DepFile />
                <DepFile />
                <DepFile />
                <DepFile />
            </div>
        );
    }
}