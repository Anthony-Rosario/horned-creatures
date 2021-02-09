import React, { Component } from 'react'
import './header.module.css';

export default class HeaderRender extends Component {
    render() {
        return (
            <>
            <section>
                <header className="headerCont">
                   <h1 className="title">Creature Feature</h1>
                </header>
            </section>
            </>
        )
    }
}
