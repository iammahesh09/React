import React, { Component } from 'react'

class Dialog extends Component {
    render() {
        return (
            <React.Fragment>
                <div>React Dialog</div>
                <div>{this.props.children}</div>
            </React.Fragment>
        )
    }
}

export default Dialog;