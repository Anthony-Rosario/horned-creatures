import React, { Component } from 'react'

export default class ImageItems extends Component {
    render() {      
        return (
            <main>
                <section>
                    <h2>{this.props.title}</h2>
                    <img alt="" src={this.props.url}></img>
                    <container className="description">
                        <h1 className="h1Descript">DESCRIPTION</h1>
                        <p>{this.props.description}</p>
                        <div>
                            <h3>HORNS</h3>
                            <article>{this.props.horns}</article>
                            <h3>KEYWORD</h3>
                            <article>{this.props.keyword}</article>
                        </div>
                    </container>
                </section>
            </main>
        )
    }
}
