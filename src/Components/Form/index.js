import React, { Component } from 'react'

import "./form.css"

export default class Form extends Component {

    

    render() {

      
        const { children } = this.props

        
        children.forEach(element => {
            console.log(element)
            switch (element.type.name) {
                case "Input":
                    console.log(element.value)
                    break;
                case "Button":
                    break;
                default:
                    break;
            }
        });

        return (
            <form className="Form">
                {children}
            </form>
        )
    }
}