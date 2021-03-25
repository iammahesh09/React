import React, { Component } from 'react';
import { WithCategory } from './WithCategory';

class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <div>This is Category component - {this.props.name}</div>
            </React.Fragment>
        );
    }
}

export default WithCategory(Category);
