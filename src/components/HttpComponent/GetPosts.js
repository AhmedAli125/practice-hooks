import React, { Component } from 'react'
import PostComponent from './PostComponent'
import './post.css'
import axios from 'axios'

class GetPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            // dataFetched : false
        }
    }

    getPosts = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // let fetchedPosts = response.map(post => post.title);
        if (response) {
            this.setState({ posts: response.data, dataFetched: true });
            this.state.posts.map(post=>console.log(post.title));
            
        } else {
            console.log('Error fetching data');
        }
    }

    clearPosts = () => {
        this.setState({ posts: [] })
    }
    
    render() {
        const { posts, dataFetched } = this.state;
        // console.log('Posts from GetPosts COmponent' + posts);
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Posts</h1>
                <div className='posts'>
                    <div>
                    {
                        posts.map(post => <PostComponent post={post.title}/>)
                    }
                    </div>
                </div>
                <div style={{display:'flex', alignItem:'center'}}>
                    <button style={buttonStyle} onClick={this.getPosts}>GET POSTS</button>
                    <button style={buttonStyle} onClick={this.clearPosts}>CLEAR POSTS</button>
                </div>
            </div>
        )
    }
}

const buttonStyle = {
    width: '300px',
    height: '50px',
    margin: '0 auto',
    align:'center'
}
export default GetPosts
