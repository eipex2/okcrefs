import React from 'react'

import './button.css'

const Button = ({ title, onClick }) => {

    const click = e => {
        e.preventDefault();
        onClick()
    }

    return (<button type="button" className="btn btn-success" onClick={click}>
        {title}
    </button>
    )
}

export default Button;