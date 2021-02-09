import React, { Component } from 'react'
import images from '../data.js';
import ImageItems from './imageitem.js';



export default class ImageList extends Component {
    render() {
        const filteredImages = this.props.images.filter((image) => {
            if(this.props.filter === 'All' || this.props.filter === image.keyword) return true;
            return false;
        });
        return (
            <div>
                {filteredImages.map(image => {
                    return <ImageItems url={image.url} title={image.title} description={image.description} keyword={image.keyword} horns={image.horns} />

                })}
                    
                   
            
            </div>
        )
    }
}



