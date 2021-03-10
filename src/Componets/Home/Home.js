import React, { useEffect, useState } from 'react';
import Post from '../../Components/Post/Post';

const Home = () => {
    
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts`
        fetch(url)
        .then(res=>res.json())
        .then(data =>{
            // console.log(data)
            setPosts(data)
        })
    },[])
    const [posts,setPosts] = useState();
    return (
        <div>
            <h2>This is Home section</h2>
            <h3>I have got { posts&& posts.length} post</h3>
            {
                posts.map(post=> <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;