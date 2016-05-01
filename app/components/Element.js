/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Element(props) {
	return (
		<div className="element-input">
			<form id="element-form" onSubmit={props.onSubmitElement}>
				<label htmlFor="element-number">Element Number</label>
				<input
					id="element-number"
					maxLength="4"
					className="element-text-input"
					placeholder="Element Number"
					onChange={props.onUpdateElementNumber}
					value={props.elementNumber}
					type="text"
				/>
				<div className="error elementNumber"></div>
				<label htmlFor="element-symbol">Element Symbol</label>
				<input
					id="element-symbol"
					maxLength="2"
					className="element-text-input"
					placeholder="Element Symbol"
					onChange={props.onUpdateElementSymbol}
					value={props.elementSymbol}
					type="text"
				/>
				<div className="error element-symbol"></div>
				<label htmlFor="element-name">Element Name</label>
				<input
					id="element-name"
					maxLength="14"
					className="element-text-input"
					placeholder="Element Name"
					onChange={props.onUpdateElementName}
					value={props.elementName}
					type="text"
				/>
				<div className="error element-name"></div>
				<label htmlFor="element-weight">Element Weight</label>
				<input
					id="element-weight"
					maxLength="12"
					className="element-text-input"
					placeholder="Element Weight"
					onChange={props.onUpdateElementWeight}
					value={props.elementWeight}
					type="text"
				/>
				<div className="error element-weight"></div>
				<label htmlFor="element-type">Element Type</label>
				<select id="element-type" className="element-select" onChange={props.onUpdateElementType} value={props.type}>
					<option value="metal">Metal</option>
					<option value="transition">Transition</option>
					<option value="ium">-ium</option>
				</select>
				<div className="error element-type"></div>
				<input
					className="hidden"
					type="submit"
					value="Post"
				/>
				<button
					className="btn btn-submit"
					type="submit">
					Add Element
				</button>
			</form>
		</div>
	)
}

Element.propTypes = {
	onSubmitElement: PropTypes.func.isRequired,
	onUpdateElementNumber: PropTypes.func.isRequired,
	onUpdateElementSymbol: PropTypes.func.isRequired,
	onUpdateElementName: PropTypes.func.isRequired,
	onUpdateElementWeight: PropTypes.func.isRequired,
	onUpdateElementType: PropTypes.func.isRequired
};

module.exports = Element;
