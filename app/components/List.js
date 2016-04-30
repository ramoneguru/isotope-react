/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;
var ElementDisplay = require('./ElementDisplay');

require('../styles/components/list.scss');

var List = React.createClass({
	componentWillMount: function() {
		window.addEventListener('resize', this.props.onListResize);
	},
	componentWillUnmount: function() {
		window.removeEventListener('resize', this.props.onListResize);
	},
	render: function() {
		var listStyles = {
			height: this.props.atomListHeight + "px"
		};
		return (
			<div className="atom-list" style={listStyles}>
				{this.props.atomList.map((item, i) => {
					return (
						<ElementDisplay
							key={i}
							left={item.left}
							top={item.top}
							atomNumber={item.atomNumber}
							atomSymbol={item.atomSymbol}
							atomName={item.atomName}
							atomWeight={item.atomWeight}
							atomColor={item.atomColor}
							originalIndex={item.originalIndex}
							visible={item.visible}
						/>
					)
				})}
			</div>
		)
	}
})

List.propTypes = {
	atomList: PropTypes.array.isRequired,
	atomListHeight: PropTypes.number.isRequired,
	onListResize: PropTypes.func
};

module.exports = List;