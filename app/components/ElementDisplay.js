/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function ElementDisplay(props) {
	var transform, elementStyles, elementLeave = (!props.visible) ? "leave" : "enter";

	transform = (props.visible) ?
	'translate3d('+props.left+'px, '+props.top+'px, 0px) scale(1,1)':
	'translate3d('+props.left+'px, '+props.top+'px, 0px) scale(0.2,0.2)';

	elementStyles = {
		backgroundColor: props.atomColor,
		transform: transform,
		WebkitTransform: transform,
		msTransform: transform
	};

	return (
		<div className={"element " + elementLeave} style={elementStyles}>
			<div className="number">{props.atomNumber}</div>
			<div className="symbol">{props.atomSymbol}</div>
			<div className="name">{props.atomName}</div>
			<div className="weight">{props.atomWeight}</div>
		</div>
	)
}

ElementDisplay.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	atomNumber: PropTypes.string.isRequired,
	atomSymbol: PropTypes.string.isRequired,
	atomName: PropTypes.string.isRequired,
	atomWeight: PropTypes.string.isRequired,
	atomColor: PropTypes.string.isRequired,
	originalIndex: PropTypes.number.isRequired,
	visible: PropTypes.bool.isRequired
};

module.exports = ElementDisplay;
