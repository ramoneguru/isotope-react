/**
 * Created by ifthenelse on 4/25/16.
 */

var React = require('react');

require('../styles/components/filter.scss');

function Filter(props) {
	return (
		<div className="filter-container">
			<h3>Filters</h3>
			<div className="filter-list">
				<button className="btn" onClick={props.onFilterShowAll}>Show All</button>
				<button className="btn" onClick={props.onFilterMetal}>Metal</button>
				<button className="btn" onClick={props.onFilterTransition}>Transition</button>
				<button className="btn" onClick={props.onFilterIum}>-ium</button>
			</div>
		</div>
	)
}

module.exports = Filter;
