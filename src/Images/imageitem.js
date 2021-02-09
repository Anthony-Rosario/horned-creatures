import React, { Component } from 'react'
import style from './images.module.css';

export default class ImageItems extends Component {
    render() {      
        return (
          
                <section>
                    <h2>{this.props.title}</h2>
                    <img alt="" src={this.props.url}></img>
                    <section className={style.description}>
                        <h1 className="h1Descript">Description</h1>
                        <p>{this.props.description}</p>
                    </section>
                    <div>
                        <h3>Horns</h3>
                        <article>{this.props.horns}</article>
                        <h3>Keyword</h3>
                        <article>{this.props.keyword}</article>
                    </div>
                </section>
          
        )
    }
}
