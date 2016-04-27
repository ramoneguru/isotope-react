/**
 * Created by ifthenelse on 4/24/16.
 */

var React = require('react');

require('../styles/components/sorter.scss');

function Sorter(props) {
	return (
		<div className="sort-container">
			<h3>Sort</h3>
			<div className="sort-list">
				<button className="btn" onClick={props.onSortByAll}>All</button>
				<button className="btn" onClick={props.onSortByName}>Name</button>
				<button className="btn" onClick={props.onSortBySymbol}>Symbol</button>
				<button className="btn" onClick={props.onSortByNumber}>Number</button>
				<button className="btn" onClick={props.onSortByOriginalOrder}>Original Order</button>
			</div>
		</div>
	)
}

module.exports = Sorter;