
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import { fetchPosts } from './services/Data';
import './App.css';
import Header from './components/Header';

function App() {

  // create State to hold the list of posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // create loading state

  // for navigate 
  const navigate = useNavigate();


    //use effect is used to load posts when the component mount
  useEffect(() => {
    const loadPosts = async () => {
      try {

        // fetch posts from the API
        const fetchedPosts = await fetchPosts();
         // update state 
        setPosts(fetchedPosts);
      } catch (error) {
        console.log(err);
      }

      // post is fetched then set loading false
       setLoading(false);
    };

    //call function
    loadPosts();
  }, []);

  // function for add new post
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // function for delete post
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    navigate('/'); 
  };

 


  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <main>
      {loading ? (
          <div className="loader-container">
            <div className="loader"></div>
            <div className="loader-text">fetching posts...</div>
          </div>
        ) : (
        <Routes>
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} deletePost={deletePost}  />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
         )}
      </main>
    </div>
  );
}

export default App;

