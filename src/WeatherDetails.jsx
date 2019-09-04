import React from 'react';

export default function WeatherDetails(props) {
	return (
		<div className={'box ' + props.datafor}>
			<p id="city">
				{props.values &&
					props.values.location &&
					props.values.location.name + ', ' + props.values.location.country}
			</p>
			<p id="temperature">{props.values && props.values.current && props.values.current.temp_c} &deg; C</p>
			<h4 className="ui horizontal inverted divider header">FEELS LIKE</h4>
			<p id="feelslike">{props.values && props.values.current && props.values.current.feelslike_c} &deg; C</p>
			<h4 className="ui horizontal inverted divider header">CONDITION</h4>
			<p id="condition">
				{props.values &&
					props.values.current &&
					props.values.current.condition &&
					props.values.current.condition.text}
			</p>
			<h4 className="ui horizontal inverted divider header">CLOUDS</h4>
			<p id="clouds">{props.values && props.values.current && props.values.current.cloud}</p>
			<h4 className="ui horizontal inverted divider header">HUMIDITY</h4>
			<p id="humidity">{props.values && props.values.current && props.values.current.humidity}</p>
		</div>
	);
}
