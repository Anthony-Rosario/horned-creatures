import React, { Component } from 'react'

export default class ImageItems extends Component {
    render() {      
        return (
            <>
                <section>
                    <h2>{this.props.title}</h2>
                    <img alt="" src={this.props.url}></img>
                    <section className="description">
                        <h1 className="h1Descript">Description</h1>
                        <p>{this.props.description}</p>
                    </section>
                    <div>
                        <lable>Horns</lable>
                        <article>{this.props.horns}</article>
                        <lable>Keyword</lable>
                        <article>{this.props.keyword}</article>
                    </div>
                </section>
            </>
        )
    }
}
