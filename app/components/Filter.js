/**
 * Created by ifthenelse on 4/25/16.
 */

var React = require('react');

function Filter(props) {
	return (
		<div className="filter-list">
			<button onClick={props.onFilterShowAll}>Show All</button>
			<button onClick={props.onFilterMetal}>Metal</button>
			<button onClick={props.onFilterTransition}>Transition</button>
			<button onClick={props.onFilterIum}>-ium</button>
		</div>
	)
}

module.exports = Filter;
