import React from 'react';

export default function Searchbar(props) {
	let cnames = props.name === 'boysearch' ? 'ui blue button' : 'ui pink button';
	return (
		<div className="searchbar">
			<div className="ui action input">
				<input
					type="text"
					placeholder={props.name === 'boysearch' ? "Search Boy's City" : "Search Girl's City"}
					id={props.id}
				/>
				<button className={cnames} onClick={props.search} name={props.name}>
					Search
				</button>
			</div>
		</div>
	);
}
