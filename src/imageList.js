import React, { Component } from 'react';
import ImageItems from './imageitem.js';



export default class ImageList extends Component {
    render() {
        return (
            <div className="flex-wrap">
                { this.props.filteredImages.map(image =>
                    <ImageItems
                    key={image.description}
                    ImageProp={image}
                    />
                )}
            </div>
        )
    }
}



