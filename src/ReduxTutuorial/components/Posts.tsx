import React, { Component } from 'react'

interface IPostState {
    posts: any[]
}

class Posts extends Component<{}, IPostState> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(resolve => resolve.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {
        const postItems = this.state.posts.map(item =>
            <div key={item.id} className="post-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
            </div>
        );

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts;