/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;
var AtomDisplay = require('./AtomDisplay');

function List(props) {
	return (
		<div className="atom-list">
			{props.atomList.map((item, i) => {
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

List.propTypes = {
	atomList: PropTypes.array.isRequired
};

module.exports = List;