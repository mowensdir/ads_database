import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import SideBar from './SideBar/SideBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <Router>
            <div class="main-content" id="main-content">
            <Route path="/dashboard" component={Home}></Route>
            </div>
          </Router>
        </main>
      </div>

      <footer>&nbsp;</footer>
    </div>
  );
}

export default App;
