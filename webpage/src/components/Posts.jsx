// Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]); // State to hold the fetched posts

    useEffect(() => {
        // Fetch data from the API
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(response => {
                // Extract only `id` and `title` for each post
                const filteredData = response.data.map(post => ({
                    id: post.id,
                    title: post.title
                }));
                setPosts(filteredData); // Set filtered data in state
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>ID:</strong> {post.id} <br />
                        <strong>Title:</strong> {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
