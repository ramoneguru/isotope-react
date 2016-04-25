/**
 * Created by ifthenelse on 4/24/16.
 */

var React = require('react');

require('../styles/components/sorter.scss');

function Sorter(props) {
	return (
		<div className="sort-list">
			<button onClick={props.onSortByName}>Name</button>
			<button onClick={props.onSortBySymbol}>Symbol</button>
			<button onClick={props.onSortByNumber}>Number</button>
			<button onClick={props.onSortByOriginalOrder}>Original Order</button>
		</div>
	)
}

module.exports = Sorter;