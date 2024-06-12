// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import AddPost from './components/AddPost';
import './styles/styles.css'; // Import the CSS file

function App() {
  const [posts, setPosts] = useState([
    { title: 'Poutine', content: 'This is a classic poutine.',image:'poutine.jpg' },
    { title: 'Pizza', content: 'This is a pizza.', image:'pizza.jpg'},
  ]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'lightgreen',
    minHeight: '100vh',
    padding: '20px',
  };

  const headerStyle = {
    backgroundColor: 'black',
    padding: '10px',
    color: 'grey',
  };

  const mainStyle = {
    fontSize: 'large',
    margin: '20px auto',
    maxWidth: '800px',
    color: 'black',
    lineHeight: '1.5',
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <Header postCount={posts.length} />
      </header>
      <main style={mainStyle}>
        <AddPost onAdd={addPost} />
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default App;

