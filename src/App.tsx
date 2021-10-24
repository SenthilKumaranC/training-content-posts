import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
//import Counter from './components/Counter/Counter';
import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';

const App = () => {

  // useState will trigger render
  const [posts, setPosts] = useState<string[]>([]);

  const onPostCreatedOutside = (newPost: any) => {
    //Get the existing array and add new Post
    setPosts([...posts, newPost]);
  }

  useEffect(() => {
    axios.get<string[]>("https://agnibook.herokuapp.com/posts").then(response => {
      setPosts(response.data);
    })
  }, [])

  return (
    <div className="App">
      <PostForm onPostCreated={onPostCreatedOutside}></PostForm>
      <Posts posts={posts} ></Posts>
    </div>
  );

  /*const [posts, setPosts] = useState<string[]>([]);

  const onPostCreated = (newPost: any) => {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm onPostCreated={onPostCreated}></PostForm>
      <Posts posts={posts} ></Posts>
    </div>
  );*/
}

export default App;
//<Counter></Counter>

/* App provided a function to PostForm
PostForm onButtonClick , sent back the post content to App
App saved the data to state variable- to trigger rendering
//Binding triggers Rendering due to state variable change
Posts gave the data to Post */

