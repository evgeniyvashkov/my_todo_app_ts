import React, { Component } from 'react'

interface IPostState {
    title: any,
    body: any,
}

class PostsForm extends Component<{}, IPostState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }

    onChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form>
                    <div>
                        <label>Title:</label> <br />
                        <input type="text" onChange={this.onChange} name='title' value={this.state.title} />
                    </div>
                    <div>
                        <label>Body:</label> <br />
                        <textarea onChange={this.onChange} name='body' value={this.state.body} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostsForm;