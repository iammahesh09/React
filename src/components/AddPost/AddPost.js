import React, { Component } from 'react'

class AddPost extends Component {

    state = {
        title: "",
        subtitle: "",
        description: "Remind him to do his taxes",
        isAvailable: true
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

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitPost.bind(this)}>
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