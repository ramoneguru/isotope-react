/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Atom(props) {
	return (
		<div className="atom-input">
			<form id="atom-form" onSubmit={props.onSubmitAtom}>
				<label htmlFor="atomNumber">Atom Number</label>
				<input
					id="atomNumber"
					maxLength="4"
					className="form-control"
					placeholder="atom Number"
					onChange={props.onUpdateAtomNumber}
					value={props.atomNumber}
					type="text"
				/>
				<label htmlFor="atomSymbol">Atom Symbol</label>
				<input
					id="atomSymbol"
					maxLength="2"
					className="form-control"
					placeholder="atom Symbol"
					onChange={props.onUpdateAtomSymbol}
					value={props.atomSymbol}
					type="text"
				/>
				<label htmlFor="atomName">Atom Name</label>
				<input
					id="atomName"
					maxLength="14"
					className="form-control"
					placeholder="atom Name"
					onChange={props.onUpdateAtomName}
					value={props.atomName}
					type="text"
				/>
				<label htmlFor="atomWeight">Atom Weight</label>
				<input
					id="atomWeight"
					maxLength="12"
					className="form-control"
					placeholder="atom Weight"
					onChange={props.onUpdateAtomWeight}
					value={props.atomWeight}
					type="text"
				/>
				<label htmlFor="atomType">Atom Type</label>
				<select id="atomType" onChange={props.onUpdateAtomType} value={props.atomType}>
					<option value="metal">Metal</option>
					<option value="transition">Transition</option>
					<option value="ium">-ium</option>
				</select>
				<label htmlFor="atomColor">Atom Color</label>
				<input
					id="atomColor"
					className="form-control"
					placeholder="atom Color"
					onChange={props.onUpdateAtomColor}
					value={props.atomColor}
					type="text"
				/>
				<input
					className="hidden"
					type="submit"
					value="Post"
				/>
				<button
					className="btn btn-submit"
					type="submit">
					Add Atom
				</button>
			</form>
		</div>
	)
}

Atom.propTypes = {
	onSubmitAtom: PropTypes.func.isRequired,
	onUpdateAtomNumber: PropTypes.func.isRequired,
	onUpdateAtomSymbol: PropTypes.func.isRequired,
	onUpdateAtomName: PropTypes.func.isRequired,
	onUpdateAtomWeight: PropTypes.func.isRequired,
	onUpdateAtomType: PropTypes.func.isRequired,
	onUpdateAtomColor: PropTypes.func.isRequired
};

module.exports = Atom;
