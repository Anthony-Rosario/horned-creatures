import React, { Component } from 'react'

export default class ImageItems extends Component {
    render() {      
        return (
                <section>
                    <h2>{this.props.ImageProp.title}</h2>
                    <img alt="" src={this.props.ImageProp.url}></img>
                    <div className="description">
                        <h1 className="h1Descript">DESCRIPTION</h1>
                        <p>{this.props.ImageProp.description}</p>
                        <div>
                            <h3>HORNS</h3>
                            <article>{this.props.ImageProp.horns}</article>
                            <h3>KEYWORD</h3>
                            <article>{this.props.ImageProp.keyword}</article>
                        </div>
                    </div>
                </section>
        )
    }
}
