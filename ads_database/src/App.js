import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import SideBar from './SideBar/SideBar.js';

function App() {
  return (
    <div class="home">
      <div class="header">
        <div class="header-left header-block">
          ADS Database
        </div>
        <div class="header-search-container header-block">
        </div>
      </div>
      <div class="body-container">
        <SideBar></SideBar>
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
