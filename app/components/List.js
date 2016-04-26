/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var AtomDisplay = require('./AtomDisplay');

var List = React.createClass({

	componentWillMount: function() {
		this.props.listWidth = "300px";
	},
	render: function () {
		var listStyles = {
			width: this.props.listWidth
		};
		return (
			<div className="atom-list" style={listStyles}>
				{this.props.atomList.map((item, i) => {
					if((i + 1) * 110 > parseInt(listStyles.width)) {
						item.top = "110px";
					}
					return (
						<AtomDisplay
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
});

module.exports = List;