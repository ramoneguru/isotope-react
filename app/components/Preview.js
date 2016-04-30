/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');

function Preview(props) {
	return (
		<div className="element-preview">
			{props.children}
		</div>
	)
}

module.exports = Preview;
