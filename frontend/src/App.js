import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPosts from './components/AllPosts';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <Header className="App-header" />
          <div>
            <PostForm />
            <AllPosts />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
