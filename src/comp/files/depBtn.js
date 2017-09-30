import React, { Component } from 'react';

export class DepBtn extends Component {
    render() {
        return (
            <div>
                <button className="selectBtn">Select</button>
                <button className="deleteBtn">Delete</button>
            </div>
        );
    }
}