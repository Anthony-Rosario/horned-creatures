import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            
                <select
                    value={this.props.currentValue}
                    onChange={this.props.handlerClick}
                    >
                        <option value=''>None</option>
                        { 
                            this.props.options.map(listItem => <option key={listItem} value={listItem}> {listItem} </option>)
                        }
                       
                    </select>
            
        )
    }
}
