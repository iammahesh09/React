import React from 'react'

const Button = ({ name, text }) => {
    return (
        <React.Fragment>
            <button className="btn btn-primary">Hello {name}! {text}</button>
        </React.Fragment>
    )
}

export default Button
