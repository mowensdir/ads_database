import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
	searchBoxKeyDown(e) {
		console.log(e);
	}
	render() {
		return (
	        <div class="sidebar">
	          <input type="text" name="search-text" class="search-text" placeholder="Search" onKeyDown={this.seachBoxKeyDown} />
	          <div id="results-content" class="results-content">
	          </div>
	        </div>
		);
	}
}

export default SideBar;
