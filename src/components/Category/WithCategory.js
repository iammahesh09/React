import React, { Component } from "react";

export function WithCategory(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <React.Fragment>
                    <div>this is WithCategory Component</div>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
}