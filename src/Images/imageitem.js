import React, { Component } from 'react'

export default class ImageItems extends Component {
    render() {      
        return (
            <>
                <section>
                    <h2>{this.props.title}</h2>
                    <img alt="" src={this.props.url} />
                    <section className="description">
                        {this.props.description}
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
