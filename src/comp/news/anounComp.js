import React, { Component } from 'react';
import { BtnComp } from "./newsBtn";
import { AnounItem } from "./anounItem";

export class AnounComp extends Component {
    render() {
        return (
            <section>
                <BtnComp />
                <AnounItem />
            </section>
        );
    }
}