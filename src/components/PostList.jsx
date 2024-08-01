
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';

function PostList({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="Blog-List">
      <h1>Blog Posts</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
       <div className='container'>
      {filteredPosts.map(post => (
       
        <div key={post.id}  className='posts-container'>
          <h3><Link to={`/post/${post.id}`}>{post.title.substring(0, 20)}...</Link></h3>
          <p>{post.body.substring(0, 100)}...</p>
        </div>
       
      ))}
    </div>
    </>
  );
}

export default PostList;

