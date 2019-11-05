import React from 'react';
import './SideBar.css';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchItems: {},
			searchString: ''
		}
	}
	componentWillMount() {
		document.addEventListener("keydown", this.searchBoxKeyDown.bind(this));
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.searchBoxKeyDown.bind(this));
	}      

	searchOnString() {
		let postData = {
			searchstring: this.state.searchString
		};
		fetch("/database/ajax/search.php", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		})
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					searchItems: result
				});
			},
			(error) => {
				console.log('error', error);
			}
		)
	}

	searchBoxKeyDown(e) {
		if(e.keyCode === 13) {
			console.log(e);
			this.state.searchString = 'Matt';
			this.searchOnString();
		}
	}
	render() {
		return (
	        <div class="sidebar">
	          <input type="text" value={this.searchString} name="search-text" class="search-text" placeholder="Search" onKeyDown={this.seachBoxKeyDown} />
	          <div id="results-content" class="results-content">
	          {this.state.searchItems.Drivers ? this.state.searchItems.Drivers.map(item => (
	            <li key={item.name}>
	              {item.name} {item.price}
	            </li>
	          )) : ''}
	          </div>
	        </div>
		);
	}
}

export default SideBar;
