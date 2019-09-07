import React, { Component } from 'react';
import Searchbar from './Searchbar';
import WeatherDetails from './WeatherDetails';
import './App.css';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
		this.requestData = this.requestData.bind(this);
		this.state = { loading: true };
		this.timeurl = 'https://api.timezonedb.com/v2.1/get-time-zone?key=UHY7BH9MT0T0&format=json&by=position&';
		this.url =
			'https://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&APPID=ca3981b91baaea052be695b3759571b2&q=';
	}
	requestData = async (place, g) => {
		const response = await fetch(this.url + place);
		const json = await response.json();
		if (g === 'girl') {
			this.setState({
				...this.state,
				girl: json,
			});
		} else {
			this.setState({
				...this.state,
				boy: json,
			});
		}
	};

	search = e => {
		if (e.target.name === 'boysearch') {
			console.log('boy search clicked');
			let boycity = document.getElementById('boy').value;
			this.requestData(boycity, 'boy');
		} else {
			console.log('girl search clicked');
			let girlcity = document.getElementById('girl').value;
			this.requestData(girlcity, 'girl');
		}
	};

	componentDidMount() {
		let girlcity = 'Hanoi';
		let boycity = 'Delhi';

		this.requestData(girlcity, 'girl');
		this.requestData(boycity, 'boy');
		this.setState({ ...this.state, loading: false });
	}
	render() {
		return (
			<div className="main">
				<Header />
				<div className="container">
					{!this.state.loading && (
						<div className="cent">
							<Searchbar id="girl" name="girlsearch" search={this.search} />
							<WeatherDetails
								tu={this.timeurl}
								values={this.state.girl && { ...this.state.girl }}
								datafor="girl"
							/>
						</div>
					)}
					{/* <div className="cent">
						<div className="girltime"></div>
						<div className="boytime"></div>
					</div> */}

					{!this.state.loading && (
						<div className="cent">
							<Searchbar id="boy" name="boysearch" search={this.search} />

							<WeatherDetails
								tu={this.timeurl}
								values={this.state.boy && { ...this.state.boy }}
								datafor="boy"
							/>
						</div>
					)}
				</div>

				<Footer />
			</div>
		);
	}
}
