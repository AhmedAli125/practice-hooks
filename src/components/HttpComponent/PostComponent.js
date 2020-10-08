import React from 'react'
import './post.css'

function PostComponent({post}) {
    // const { post } = this.props;
    // console.log(post);
    return (
        <div className='postComponent'>
            <p>{post}</p>
         </div>
    )
}

export default PostComponent