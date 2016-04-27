/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
require('../styles/vendor/normalize.css');

function MainContainer(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

module.exports = MainContainer;
