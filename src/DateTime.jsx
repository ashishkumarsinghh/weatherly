import React, { Component } from 'react';

export default class DateTime extends Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.getTime = this.getTime.bind(this);
		this.state = { time: '' };
	}
	getTime = async (url, lat, long) => {
		const u = url + '&lat=' + lat + '&lng=' + long;
		console.log(u);
		const res = await fetch(u);
		const jres = await res.json();
		console.log('jres' + jres);
		this.setState({ time: jres.formatted });
	};

	componentDidMount() {
		this.getTime(this.props.url, this.props.lat, this.props.lon);
	}

	render() {
		return <p id="datetime">{this.state.time}</p>;
	}
}
