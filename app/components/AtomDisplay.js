/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Preview(props) {
	var atomColor = {
		backgroundColor: props.atomColor
	};
	return (
		<div className="atom" style={atomColor}>
			<div className="atom-number">{props.atomNumber}</div>
			<div className="atom-symbol">{props.atomSymbol}</div>
			<div className="atom-name">{props.atomName}</div>
			<div className="atom-weight">{props.atomWeight}</div>
		</div>
	)
}

Preview.propTypes = {
	atomNumber: PropTypes.string.isRequired,
	atomSymbol: PropTypes.string.isRequired,
	atomName: PropTypes.string.isRequired,
	atomWeight: PropTypes.string.isRequired,
	atomColor: PropTypes.string.isRequired
};

module.exports = Preview;
