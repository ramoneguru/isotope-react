/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function AtomDisplay(props) {
	var anim;
	var atomStyles = {
		backgroundColor: props.atomColor,
		top: props.top,
		left: props.left
	};
	anim = (props.visible) ? "atom-enter" : "atom-leave";
	
	return (
		<div className={"atom " + anim} style={atomStyles}>
			<div className="atom-number">{props.atomNumber}</div>
			<div className="atom-symbol">{props.atomSymbol}</div>
			<div className="atom-name">{props.atomName}</div>
			<div className="atom-weight">{props.atomWeight}</div>
		</div>
	)
}

AtomDisplay.propTypes = {
	atomNumber: PropTypes.string.isRequired,
	atomSymbol: PropTypes.string.isRequired,
	atomName: PropTypes.string.isRequired,
	atomWeight: PropTypes.string.isRequired,
	atomColor: PropTypes.string.isRequired,
	originalIndex: PropTypes.number.isRequired
};

module.exports = AtomDisplay;
