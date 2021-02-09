import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handlerClick} className="dropdown">
                       <option value="All">All Creatures</option>  
                       <option value="Rhino">Rhino's</option> 
                       <option value="Unicorn">Unicorn's</option> 
                       <option value="Unilego">Unilego's</option> 
                       <option value="Narwhal">Narwhal's</option> 
                       <option value="Markhor">Markhor's</option> 
                       <option value="Addax">Addax's</option> 
                       <option value="Mouflon">Mouflon</option> 
                       <option value="Chameleon">Chameleon's</option> 
                       <option value="Lizard">Lizard's</option> 
                       <option value="Dragon">Dragon's</option> 
                    </select>
            </div>
        )
    }
}
