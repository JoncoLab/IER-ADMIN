import React, { Component } from 'react';

export class BtnComp extends Component {
    render() {
        return (
            <div>
                <button className="selectBtn">Select</button>
                <button className="deleteBtn">Delete</button>
            </div>
        );
    }
}