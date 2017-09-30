import React, { Component } from "react";

export class Files extends Component {
    render() {
        return (
            <section id="files" style={{display: this.props.active === true ? "flex" : "none"}}>

            </section>
        );
    }
}