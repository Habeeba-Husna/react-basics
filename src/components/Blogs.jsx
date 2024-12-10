import React, { useContext } from 'react';
import { BlogContext } from './Context/BlogContext';
import { Link } from 'react-router-dom';

function Blogs() {
  const { blogs, deleteBlog } = useContext(BlogContext);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          <Link to={`/blogs/${blog.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
