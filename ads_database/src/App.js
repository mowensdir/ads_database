import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import ReactDOM from 'react-dom';
import SideBar from './SideBar/SideBar';
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
            <div class="main-content" id="main-content">
              <Router>
                <Route path="dashboard" component={Home}/>
              </Router>
            </div>
        </main>
      </div>

      <footer>&nbsp;</footer>
    </div>
  );
}

export default App;
