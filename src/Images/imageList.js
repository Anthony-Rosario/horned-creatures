import React, { Component } from 'react'
import ImageItems from './imageitem.js';



export default class ImageList extends Component {
    render() {
        // const filteredImages = this.props.images.filter((image) => {
        //     if(this.props.filter === 'All' || this.props.filter === image.keyword) return true;
        //     return false;
        // });
        return (
            <div>
                
                    
                    <ImageItems />
                   
            
            </div>
        )
    }
}



