import React, { Component } from 'react';
import { WithCategory } from './WithCategory';

class Category extends Component {
    render() {
        return (
            <React.Fragment>
                <h4>{this.props.title}</h4>
                <div>This is Category component - {this.props.name}</div>
                <ul>
                    {this.props.categorys.map((category, i) => {
                        return (
                            <li key={i}>{category}</li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );
    }
}

export default WithCategory(Category);
