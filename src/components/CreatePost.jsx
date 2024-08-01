import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/Data';
import { toast } from 'react-toastify';
import './CreatePost.css';



function CreatePost({ addPost }) {


  // create state for title and body of new post
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  // used for navigation
  const navigate = useNavigate();

  //create function it handle submission of form
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {

      //call createPost function for creating new post  with title body and userId
      const newPost = await createPost({ title, body, userId: 1 });

      //add new post in list posts by calling addPosts function
      addPost(newPost);
      toast.success('Post created successfully!'); // Show success message
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
