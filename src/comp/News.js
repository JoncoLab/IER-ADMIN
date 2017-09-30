import React, { Component } from "react";
import { NewsComp } from "./news/newsComp";
import { AnounComp } from "./news/anounComp";
import { Post } from "./news/postComp"

export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <section id="news">
                <NewsComp />
                <AnounComp />
                <Post />
            </section>
        );
    }
}