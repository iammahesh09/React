import React, { Component } from "react";

export function WithCategory(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                title: "Title for HOC",
                categorys: ['CategoryOne', 'CategoryTwo', 'CategoryThree', 'CategoryFour']
            }
        }
        render() {
            return (
                <React.Fragment>
                    <div>this is WithCategory Component</div>
                    <WrappedComponent {...this.props} {...this.state} />
                </React.Fragment>
            )
        }
    }
}