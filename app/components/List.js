/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var AtomDisplay = require('./AtomDisplay');

var List = React.createClass({
	render: function () {
		return (
			<div className="atom-list">
				{this.props.atomList.map((item, i) => {
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