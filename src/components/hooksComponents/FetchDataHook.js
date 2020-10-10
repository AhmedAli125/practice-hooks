import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchDataHook() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1); 

    const getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts//${id}`)
            .then(res => {
            setPost(res.data)
            })
            .catch(err => {
                console.log(err)
        })
    }

    return (
        <div>
            <div style={{width:'20%', margin:'10px auto', backgroundColor:'palegreen', padding:'5%'}}>
                <input type='text' value={id} onChange={e => setId(e.target.value)} />
                <button onClick={getPost}>Get Post</button>
            </div>
            <h3 style={{textAlign:'center'}}>{post.title}</h3>
        </div>
    )
}

export default FetchDataHook
