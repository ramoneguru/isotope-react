/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Element(props) {
	return (
		<div className="element-input">
			<form id="element-form" onSubmit={props.onSubmitElement}>
				<label htmlFor="elementNumber">Element Number</label>
				<input
					id="elementNumber"
					maxLength="4"
					className="form-control"
					placeholder="Element Number"
					onChange={props.onUpdateElementNumber}
					value={props.elementNumber}
					type="text"
				/>
				<div className="error elementNumber"></div>
				<label htmlFor="elementSymbol">Element Symbol</label>
				<input
					id="elementSymbol"
					maxLength="2"
					className="form-control"
					placeholder="Element Symbol"
					onChange={props.onUpdateElementSymbol}
					value={props.elementSymbol}
					type="text"
				/>
				<div className="error elementSymbol"></div>
				<label htmlFor="elementName">Element Name</label>
				<input
					id="elementName"
					maxLength="14"
					className="form-control"
					placeholder="element Name"
					onChange={props.onUpdateElementName}
					value={props.elementName}
					type="text"
				/>
				<div className="error elementName"></div>
				<label htmlFor="elementWeight">Element Weight</label>
				<input
					id="elementWeight"
					maxLength="12"
					className="form-control"
					placeholder="Element Weight"
					onChange={props.onUpdateElementWeight}
					value={props.elementWeight}
					type="text"
				/>
				<div className="error elementWeight"></div>
				<label htmlFor="elementType">Element Type</label>
				<select id="elementType" className="element-select" onChange={props.onUpdateElementType} value={props.elementType}>
					<option value="metal">Metal</option>
					<option value="transition">Transition</option>
					<option value="ium">-ium</option>
				</select>
				<div className="error elementType"></div>
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
