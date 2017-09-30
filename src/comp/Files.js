import React, { Component } from "react";
import { DepBlock } from "./files/depBlock";
import { DepPost} from "./files/depPost";

export class Files extends Component {
    render() {
        return (
            <section id="files">
                <DepBlock />
                <DepBlock />
                <DepBlock />
                <DepBlock />
                <DepPost />
            </section>
        );
    }
}