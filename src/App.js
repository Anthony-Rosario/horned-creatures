import React, { Component } from 'react'
import images from './data.js';
import HeaderRender from './myHeader.js';
import ImageList from './imageList.js';
import DropDown from './DropDown.js';
import './App.css';

export default class App extends Component {
  state ={ 
    filter: 'All'
  }

  handlerClick = e => {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
    <>
      <HeaderRender />
      <DropDown handlerClick={this.handlerClick} />
      <ImageList images={images} filter={this.state.filter}/>
    </>
    )
  }
}
