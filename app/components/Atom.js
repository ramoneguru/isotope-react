/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var PropTypes = React.PropTypes;

function Atom(props) {
	return (
		<div className="atom-input">
			<form onSubmit={props.onSubmitAtom}>
				<label htmlFor="atomicNumber">Atomic Number</label>
				<input
					id="atomicNumber"
					maxLength="4"
					className="form-control"
					placeholder="Atomic Number"
					onChange={props.onUpdateAtomNumber}
					value={props.atomNumber}
					type="text"
				/>
				<label htmlFor="atomicSymbol">Atomic Symbol</label>
				<input
					id="atomicSymbol"
					maxLength="2"
					className="form-control"
					placeholder="Atomic Symbol"
					onChange={props.onUpdateAtomSymbol}
					value={props.atomSymbol}
					type="text"
				/>
				<label htmlFor="atomicName">Atomic Name</label>
				<input
					id="atomicName"
					maxLength="14"
					className="form-control"
					placeholder="Atomic Name"
					onChange={props.onUpdateAtomName}
					value={props.atomName}
					type="text"
				/>
				<label htmlFor="atomicWeight">Atomic Weight</label>
				<input
					id="atomicWeight"
					maxLength="12"
					className="form-control"
					placeholder="Atomic Weight"
					onChange={props.onUpdateAtomWeight}
					value={props.atomWeight}
					type="text"
				/>
				<label htmlFor="atomicColor">Atomic Color</label>
				<input
					id="atomicColor"
					className="form-control"
					placeholder="Atomic Color"
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
	onUpdateAtomColor: PropTypes.func.isRequired
};

module.exports = Atom;
