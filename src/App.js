import React, { Component } from 'react'
import images from './data.js';
import HeaderRender from './Header/myHeader.js';
import ImageList from './Images/imageList.js';
import DropDown from './dropdown/DropDown.js';

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
