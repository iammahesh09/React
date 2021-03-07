import React, { Component } from 'react'
import TitleContext from '../../Context/TitleContext'

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuList: ["Home", "Post's", "History", "Contact"]
        }
    }
    render() {
        return (
            <React.Fragment>
                <TitleContext.Consumer>
                    {
                        (value) => {
                            return <h3 className="display-6">{value}</h3>
                        }
                    }
                </TitleContext.Consumer>

                <ul className="nav flex-column">
                    {
                        this.state.menuList.map((menu, index) =>
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="#">{menu}</a>
                            </li>
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }
}
export default Sidebar;