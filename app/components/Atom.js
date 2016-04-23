/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Atom(props) {
	return (
		<form onSubmit={props.onSubmitAtom}>
			<input
				name="atomic_number"
				className="form-control"
				placeholder="Atomic Number"
				onChange={props.onUpdateAtomNumber}
				value={props.atom_number}
				type="text"
			/>
			<input
				name="atomic_symbol"
				className="form-control"
				placeholder="Atomic Symbol"
				onChange={props.onUpdateAtomSymbol}
				value={props.atom_symbol}
				type="text"
			/>
			<input
				name="atomic_control"
				className="form-control"
				placeholder="Atomic Name"
				onChange={props.onUpdateAtomName}
				value={props.atom_name}
				type="text"
			/>
			<input
				name="atomic_weight"
				className="form-control"
				placeholder="Atomic Weight"
				onChange={props.onUpdateAtomWeight}
				value={props.atom_weight}
				type="text"
			/>
			<input
				className="hidden"
				type="submit"
				value="Post"
			/>
			<button
				className="btn btn-block btn-success"
				type="submit">
				Add Atom
			</button>
		</form>
	)
}

Atom.propTypes = {
	onSubmitAtom: PropTypes.func.isRequired,
	onUpdateAtomNumber: PropTypes.func.isRequired,
	onUpdateAtomSymbol: PropTypes.func.isRequired,
	onUpdateAtomName: PropTypes.func.isRequired,
	onUpdateAtomWeight: PropTypes.func.isRequired
};

module.exports = Atom;
