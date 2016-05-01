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
			height: this.props.elementListHeight + "px"
		};
		return (
			<div className="element-list" style={listStyles}>
				{this.props.elementList.map((item, i) => {
					return (
						<ElementDisplay
							key={i}
							left={item.left}
							top={item.top}
							number={item.number}
							symbol={item.symbol}
							name={item.name}
							weight={item.weight}
							color={item.color}
							type={item.type}
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
	elementList: PropTypes.array.isRequired,
	elementListHeight: PropTypes.number.isRequired,
	onListResize: PropTypes.func
};

module.exports = List;