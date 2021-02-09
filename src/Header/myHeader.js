import React, { Component } from 'react'
import './header.module.css';

export default class HeaderRender extends Component {
    render() {
        return (
            <>
            <section>
                <header className="headerCont">
                   <h1 className="title">Creature Feature</h1>
                    <select className="dropdown">
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
                </header>
            </section>
            </>
        )
    }
}
