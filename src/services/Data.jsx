

// function to fetch  posts from api


export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // ff the response is not okay throw  error
    if (!response.ok) {
      throw  Error('Failed to fetch posts');
    }
    return response.json();
  };


  // function for creating  post
  export const createPost = async (post) => {

    const newPost = {
      ...post,           // existing post
      id: Date.now()  // use for generate id
    };
  
    return newPost;
  };
  

  // function for fetch a single post by id from the api
  
  export const fetchPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw Error('Failed to fetch post');
      }
     
    return response.json();
  }
  