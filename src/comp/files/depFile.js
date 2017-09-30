import React, { Component } from 'react';

export class DepFile extends Component {
    render() {
        return (
            <div className="depFile">
                <h3>File</h3>
                <button className="downloadFile">Download</button>
                <button className="deleteFile">Delte</button>
            </div>
        );
    }
}