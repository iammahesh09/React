import React, { Component } from 'react'
import ThemeContext from '../../Context/ThemeContext';

class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            subtitle: "",
            description: "Remind him to do his taxes",
            isAvailable: true
        }
        console.log('AddPost.js - constructor called');
    }

    onSubmitPost = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    textChange = (title, e) => {
        this.setState({
            [title]: e.target.value,
        })
    }


    componentDidMount() {
        console.log('AddPost.js - componentDidMount called');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('AddPost.js - shouldComponentUpdate called');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('AddPost.js - getSnapshotBeforeUpdate called');
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('AddPost.js - componentDidUpdate Updated');
    }

    componentWillUnmount() {
        console.log('AddPost.js - componentWillUnmount called');
    }

    static contextType = ThemeContext;

    render() {
        console.log('AddPost.js - render called');
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitPost.bind(this)} className={this.context}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={this.state.title} onChange={this.textChange.bind(this, 'title')} className="form-control" id="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subtitle" className="form-label">Sub Title</label>
                        <input type="text" value={this.state.subtitle} onChange={this.textChange.bind(this, 'subtitle')} className="form-control" id="subtitle" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea type="text" value={this.state.description} onChange={this.textChange.bind(this, 'description')} className="form-control" id="description" ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Is Available</label>
                        <select className="form-select" value={this.state.isAvailable} onChange={this.textChange.bind(this, 'isAvailable')}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }


}

export default AddPost;