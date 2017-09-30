import React, { Component } from 'react';
import { BtnComp } from "./newsBtn";
import { NewsItem } from "./newsItem";

export class NewsComp extends Component {
    render() {
        return (
            <section>
                <BtnComp />
                <NewsItem />
            </section>
        );
    }
}