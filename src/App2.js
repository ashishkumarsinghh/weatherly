import React from 'react';
import './App.css';
function App() {
	return (
		<div className="App">
			<Grid>
				<div.Row columns={3}>
					<Grid.Column className="lcol">
						<div className="searchbar girl">
							<div className="ui action input">
								<input type="text" placeholder="Search..." id="girlcity" />
								<button className="ui pink button" onClick={search('girl')} name="girl">
									Search
								</button>
							</div>
							<div className="result">
								<p id="g_temperature"></p>
								<p id="g_condition"></p>
								<p id="g_city"></p>
								<p id="g_feelslike"></p>
								<p id="g_winds"></p>
								<p id="g_wimg"></p>
							</div>
						</div>
					</Grid.Column>
					<Grid.Column className="ccol"></Grid.Column>
					<Grid.Column className="rcol">
						<div className="searchbar boy">
							<div className="ui action input">
								<input type="text" placeholder="Search..." id="boycity" />
								<button className="ui blue button" onClick={search('boy')} name="boy">
									Search
								</button>
							</div>
							<div className="result">
								<p id="b_temperature"></p>
								<p id="b_condition"></p>
								<p id="b_city"></p>
								<p id="b_feelslike"></p>
								<p id="b_winds"></p>
								<p id="b_wimg"></p>
							</div>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}

const url = 'https://api.apixu.com/v1/current.json?key=b470f80b1fd44287bd2195524180707&q=';

const search = function(e) {
	console.log('search was called.');
	//let place = document.getElementById('searchcity').value;
	//console.log(place);
	const request = async place => {
		const response = await fetch(url + place);
		const json = await response.json();
		console.log(json);
	};
	if (e == 'boy') {
		const place = document.getElementById('boycity').value;
		const request = async () => {
			const response = await fetch(url + place);
			const json = await response.json();
			console.log(json);
			document.getElementById('b_temperature').innerHTML = json.current.temp_c + '&deg C ';
			document.getElementById('b_condition').innerHTML = json.current.condition.text;
			document.getElementById('b_city').innerHTML = json.location.name + ', ' + json.location.country;
			document.getElementById('b_feelslike').innerHTML =
				'Feels like ' + json.current.feelslike_c + '&deg C ' + '/ ' + json.current.feelslike_f + '&deg F';
			document.getElementById('b_humidity').innerHTML = 'Humidity is ' + json.current.humidity;
			document.getElementById('b_winds').innerHTML = 'Winds blowing at ' + json.current.wind_kph + ' Kmph.';
			document.getElementById('b_wimg').src = json.current.condition.icon;
		};
		request();
	} else {
		const place = document.getElementById('girlcity').value;
		const request = async () => {
			const response = await fetch(url + place);
			const json = await response.json();
			console.log(json);
			document.getElementById('g_temperature').innerHTML = json.current.temp_c + '&deg C ';
			document.getElementById('g_condition').innerHTML = json.current.condition.text;
			document.getElementById('g_city').innerHTML = json.location.name + ', ' + json.location.country;
			document.getElementById('g_feelslike').innerHTML =
				'Feels like ' + json.current.feelslike_c + '&deg C ' + '/ ' + json.current.feelslike_f + '&deg F';
			document.getElementById('g_humidity').innerHTML = 'Humidity is ' + json.current.humidity;
			document.getElementById('g_winds').innerHTML = 'Winds blowing at ' + json.current.wind_kph + ' Kmph.';
			document.getElementById('g_wimg').src = json.current.condition.icon;
		};
	}
};
export default App;
