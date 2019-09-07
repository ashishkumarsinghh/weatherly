import React from 'react';
import DateTime from './DateTime';

export default function WeatherDetails(props) {
	return (
		<div className={'box ' + props.datafor}>
			<p id="city">{props.values && props.values.name}</p>
			{props.values && props.values.weather && props.values.weather[0].icon && (
				<img alt="icon" src={'http://openweathermap.org/img/wn/' + props.values.weather[0].icon + '@2x.png'} />
			)}
			<p id="temperature">
				{props.values && props.values.main && ('' + props.values.main.temp).substring(0, 2)} &deg; C
			</p>

			<h5 className="ui horizontal inverted divider header">DATE & TIME</h5>
			{props.values && props.values.coord && (
				<DateTime url={props.tu} lat={props.values.coord.lat} lon={props.values.coord.lon} />
			)}
			<h5 className="ui horizontal inverted divider header">CONDITION</h5>
			<p id="condition">{props.values && props.values.weather && props.values.weather[0].description}</p>
			<h5 className="ui horizontal inverted divider header">CLOUDS</h5>
			<p id="clouds">{props.values && props.values.clouds && props.values.clouds.all}</p>
			<h5 className="ui horizontal inverted divider header">HUMIDITY</h5>
			<p id="humidity">{props.values && props.values.main && props.values.main.humidity}</p>
		</div>
	);
}
