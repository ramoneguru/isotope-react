/**
 * Created by ifthenelse on 4/23/16.
 */

var React = require('react');
var AtomDisplay = require('./AtomDisplay');

function List(props) {
	var listHeight = props.height;
	var listWidth = props.width;
	return(
		<div className="atom-list">
			{props.atomList.map((item, i) => {
				var top, left;
				left = i * 110 + "px";
				return (
					<AtomDisplay
						key={i}
						left={left}
						top={top}
						atomNumber={item.atomNumber}
						atomSymbol={item.atomSymbol}
						atomName={item.atomName}
						atomWeight={item.atomWeight}
						atomColor={item.atomColor}
					/>
				)
			})}
		</div>
	)
}



module.exports = List;
