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
		this.url = 'https://api.apixu.com/v1/current.json?key=b470f80b1fd44287bd2195524180707&q=';
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
							<WeatherDetails values={this.state.girl && { ...this.state.girl }} datafor="girl" />
						</div>
					)}
					{!this.state.loading && (
						<div className="cent">
							<Searchbar id="boy" name="boysearch" search={this.search} />

							<WeatherDetails values={this.state.boy && { ...this.state.boy }} datafor="boy" />
						</div>
					)}
				</div>

				<Footer />
			</div>
		);
	}
}
