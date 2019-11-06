import React, { Component } from 'react';
import './Driver.css';

class Driver extends Component {

	constructor(props) {
		super(props);
		this.state = {
			response: {}
		}
		let postData = {
			response: this.props.match.driverid
		};
		fetch("/database/ajax/drivers.php", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		})
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					response: result
				});
			},
			(error) => {
				console.log('error', error);
			}
		)
	}
	render() {
		if(!this.state.response.Driver) {
			return null;
		}
		return (
			<div class="file-details tab-container" id="file-details">
				<h3>{this.state.response.Driver.LastName}, {this.state.response.Driver.FirstName} {this.state.response.Driver.MiddleName}</h3>
				<nav>
					<ul class="nav nav-tabs">
						<li class="nav-item"><a data-toggle="tab" role="tab" class="nav-link active" href="#info">Info</a></li>
						<li class="nav-item"><a data-toggle="tab" role="tab" class="nav-link" href="#files">Files</a></li>
						<li class="nav-item"><a data-toggle="tab" role="tab" class="nav-link" data-did="{did}" href="#violations">Violations</a></li>
					</ul>
				</nav>
				<div class="tab-content tab-pane show active" role="tabpanel" id="info">
					<p><span class="filedetail-label">Driver ID </span><span class="filedetail-value">{this.state.response.Driver.DriverId}</span></p>
					<p><span class="filedetail-label">DLN </span><span class="filedetail-value">{this.state.response.Driver.DriversLicenseNumber}</span></p>
					<p><span class="filedetail-label">DOB </span><span class="filedetail-value">{this.state.response.Driver.DateOfBirth}</span></p>
				</div>

				<div class="file-content tab-content hidden tab-pane" id="files" role="tabpanel">
				(if(this.state.response.DriverFiles.length) {
					<div>
						<div class="files-sidebar">
						{this.state.response.DriverFiles.forEach((file) => 
							<p><a href="#" class="fname-link driver-file" data-targetid="driver-files-content" data-fileid={file.FileID}>{file.FileName}</a></p>
						)}
						</div>
						<div class="driver-files-content" id="driver-files-content"> </div>
					</div>
				} else {
					<p class="file-nofiles">No files for this driver</p>
				});
				</div>

				<div class="tab-content tab-pane hidden" id="violations" role="tabpanel">
				Violations Report
				</div>

			</div>
		);
	}
}

export default Driver;
