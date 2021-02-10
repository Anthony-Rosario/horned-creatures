import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handlerClick} className="dropdown">
                       <option value="All">All Creatures</option>  
                       <option value="rhino">Rhino's</option> 
                       <option value="unicorn">Unicorn's</option> 
                       <option value="unilego">Unilego's</option> 
                       <option value="narwhal">Narwhal's</option> 
                       <option value="markhor">Markhor's</option> 
                       <option value="addax">Addax's</option> 
                       <option value="mouflon">Mouflon</option> 
                       <option value="chameleon">Chameleon's</option> 
                       <option value="lizard">Lizard's</option> 
                       <option value="dragon">Dragon's</option> 
                    </select>
            </div>
        )
    }
}
