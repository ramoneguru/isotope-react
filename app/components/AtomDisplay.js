/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function AtomDisplay(props) {
	var transform, atomStyles, atomLeave = (!props.visible) ? "leave" : "enter";

	transform = (props.visible) ?
	'translate3d('+props.left+'px, '+props.top+'px, 0px) scale(1,1)':
	'translate3d('+props.left+'px, '+props.top+'px, 0px) scale(0.1,0.1)';

	atomStyles = {
		backgroundColor: props.atomColor,
		transform: transform,
		WebkitTransform: transform,
		msTransform: transform
	};

	return (
		<div className={"atom " + atomLeave} style={atomStyles}>
			<div className="atom-number">{props.atomNumber}</div>
			<div className="atom-symbol">{props.atomSymbol}</div>
			<div className="atom-name">{props.atomName}</div>
			<div className="atom-weight">{props.atomWeight}</div>
		</div>
	)
}

AtomDisplay.propTypes = {
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

module.exports = AtomDisplay;
