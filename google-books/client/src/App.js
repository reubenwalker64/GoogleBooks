import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from react-router-dom;
import './App.css';
import search from "/pages/search";
import saved from "/pages/saved";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Google Books Search</h1>
            <p>
              Find your book of the day.
            </p>
            <a
              className="App-link"
              href="https://???"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Book Search
            </a>
          </header>
        </div>
        <div>
          <Route path="/" component="search" />
          <Route path="/saved" component="saved" />
        </div>
      </Router>
    );
  }
}

export default App;
