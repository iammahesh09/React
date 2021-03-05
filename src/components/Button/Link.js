import { Component } from "react";

class Link extends Component {
    render() {
        return (
            <div>
                <a href="#" className="btn btn-link">Hello! {this.props.name}, this is {this.props.text} component</a>
            </div>
        )
    }
}

export default Link;