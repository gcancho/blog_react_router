import React from 'react';
import posts from './../data/Posts';
import { Link } from 'react-router-dom';


const Blog = () => {
    console.log(posts[0].id);
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Blog;