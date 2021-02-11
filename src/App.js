import React, { Component } from 'react'
import images from './data.js';
import HeaderRender from './myHeader.js';
import ImageList from './imageList.js';
import DropDown from './DropDown.js';
import './App.css';

export default class App extends Component {
  state ={ 
    keyword: '',
    horns: 0,
  }

  handlerClickImage = e => {
    this.setState({
      keyword: e.target.value
    });
  }

  handlerClickHorns = e => {
    this.setState({
      horns: Number(e.target.value)
    })
  }

  imageKeywords = Array.from(new Set(images.map(image => {
    Object.keys(image);
    return image.keyword
  })));
  imageHorns = Array.from(new Set(images.map(image => {
    Object.keys(image);
    return image.horns
  })));

  render() {
    const filteredImages=images.filter((image) => {
      if(!this.state.keyword && !this.state.horns) return true;
      if(this.state.keyword && !this.state.horns) {
        if(image.keyword === this.state.keyword) return true;
      }
      if(this.state.horns && !this.state.keyword) {
        if(image.horns === this.state.horns) return true;
      }
      if(this.state.horns && this.state.keyword) {
        if(image.horns === this.state.horns && image.keyword === this.state.keyword) return true
      }
      return false
    });

    return (
    <>
      <HeaderRender />
      <DropDown
      currentValue={this.state.keyword} 
      handlerClick={this.handlerClickImage}
      options={this.imageKeywords} 
      />
      <DropDown

      currentValue={this.state.horns}
      handlerClick={this.handlerClickHorns} 
      options={this.imageHorns}
      />
      <ImageList filteredImages={filteredImages} />
    </>
    )
  }
}
