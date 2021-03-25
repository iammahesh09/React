import React, { Component } from "react";
export function WithCategory(limit) {
    return function WithCategory(WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: "Title for HOC",
                    categorys: ['CategoryOne', 'CategoryTwo', 'CategoryThree', 'CategoryFour']
                }
            }
            render() {
                const categorys_limit = this.state.categorys.slice(0, limit)
                return (
                    <React.Fragment>
                        <div>this is WithCategory Component</div>
                        <WrappedComponent {...this.props} categorys={categorys_limit} />
                    </React.Fragment>
                )
            }
        }
    }
}