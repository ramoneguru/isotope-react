/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');

function MainContainer(props) {
	return (
		<div>
			{props.children}
		</div>
	)
}

module.exports = MainContainer;
