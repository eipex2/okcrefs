import React from 'react'

import "./body.css"



const Body = (props) => {

    const {
        children, center 
    } = props

    const {centerm} = styles

    var style={}

    if(center){
        style=styles.centerm
    }

    return (
        <div className="Body" style={style}>
            {children}
        </div>
    )
}

const styles = {
    centerm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'start'
    },

}

export default Body;