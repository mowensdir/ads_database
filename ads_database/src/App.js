import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';

function App() {
  return (
    <div class="home">
      <div class="header">
        <div class="header-left header-block">
          MICHIGAN
        </div>
        <div class="header-search-container header-block">
        </div>
      </div>
      <div class="body-container">
        <div class="sidebar">
          <input type="text" name="search-text" class="search-text" placeholder="Search" />
          <div id="results-content" class="results-content">
          </div>
        </div>

        <main>
          <div class="main-content" id="main-content">
          </div>
        </main>
      </div>

      <footer>&nbsp;</footer>
    </div>
  );
}

export default App;
