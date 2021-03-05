import React, { Component } from "react";
import AddPost from "../AddPost/AddPost";
import SingalPost from "../SingalPost/SingalPost";

class Posts extends Component {
    state = {
        posts: [
            {
                id:100,
                title: "Clean kitchen",
                subtitle: "Home",
                description: "Don't forget the are under the sink",
                isAvailable: true
            },
            {
                id: 200,
                title: "Call Eric",
                subtitle: "Home",
                description: "Remind him to do his taxes",
                isAvailable: true
            },
            {
                id: 300,
                title: "Water flowers",
                subtitle: "Home",
                description: "Don't forget the ones in the garden!",
                isAvailable: false
            },
            {
                id: 400,
                title: "flowers",
                subtitle: "Home",
                description: "Don't forget the ones in the garden!",
                isAvailable: true
            }
        ],
        title: "Posts List",
        isToggle: true,
    };

    updateTitle(e) {
        e.preventDefault();
        this.setState({
            title: "Updated Posts List Title",
        });
    }

    updateTitle2 = (e) => {
        e.preventDefault();
        this.setState({
            title: "Updated Posts List",
        });
    };

    isToggle = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    onTitleChange = (id, e) => {
        e.preventDefault();
        const postIndex = this.state.posts.findIndex(post => post.id === id);
        const posts = [...this.state.posts]
        posts[postIndex].title = e.target.value;
        this.setState({
            posts
        })
    }

    showPosts() {
        if (!this.state.isToggle) return (<h3 className="text-center text-warning">No Post's List</h3>);
        return (
            this.state.posts.map((post, index) => {
                return(
                    <div className="col-4">
                        <SingalPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            subtitle={post.subtitle}
                            description={post.description}
                            availability={post.isAvailable}
                            titleChange={this.onTitleChange.bind(this, post.id)}
                        />

                    </div>
                )
            })
        )

    }



    render() {
        return (
            <React.Fragment>
                <div className="text-center mt-3 mb-2">
                    <h3 className="display-6 text-primary mb-2">{this.state.title}</h3>
                    <a
                        href="https://www.google.com/"
                        className="btn btn-success btn-sm mx-1"
                        onClick={this.updateTitle2}
                    >
                        Update Title
                    </a>
                    <a
                        href="https://www.google.com/"
                        className="btn btn-primary btn-sm mx-1"
                        onClick={(e) => this.updateTitle(e)}
                    >
                        Update Title
                    </a>
                </div>
                <hr />
                <button className="btn btn-dark mb-3 w-100" onClick={this.isToggle}>
                    {this.state.isToggle ? "Hide Posts" : "Show Posts"}
                </button>
                <div className="row">
                    {this.showPosts()}
                </div>
                <hr />
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-xl-6">
                        <AddPost />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Posts;
