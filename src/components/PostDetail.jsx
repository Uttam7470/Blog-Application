

import React from 'react';
import './PostDetail.css'
import { useParams, useNavigate } from 'react-router-dom';

function PostDetail({ posts, deletePost }) {

  // useParams is react hook is used to finf the id  from the url.
  const { id } = useParams();

  // used for navigation
  const navigate = useNavigate();

  // find the post which match or similar to url id
  // const post = posts.find(p => p.id === id);
  const post = posts.find(p => p.id.toString() === id);


  const handleDelete = () => {

    // call deletePost function
     deletePost(post.id);
      navigate('/'); 
    
  };

  //function used for close post details
  const handleClose = () => {
    navigate('/'); 
  };

  return (
    <div className='pop-up'>
      <div className='pop-up-content'>
      <span onClick={handleClose} className="close">&times;</span>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={handleDelete} className="delete-button">Delete Post</button>
    </div>
    </div>
  );
}

export default PostDetail;
