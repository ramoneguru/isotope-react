/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var Atom = require('../components/Atom');
var update = require('react-addons-update');


const AtomContainer = React.createClass({
	getInitialState: function() {
		return {
			atomNumber: '',
			atomSymbol: '',
			atomName: '',
			atomWeight: '',
			atomList: []
		}
	},
	handleSubmitAtom: function(e) {
		var atom, list;
		e.preventDefault();
		atom = {
			"atomSymbol": this.state.atomNumber,
			"atomNumber": this.state.atomSymbol,
			"atomName": this.state.atomName,
			"atomWeight": this.state.atomWeight
		};
		list = update(this.state.atomList, {$push: [atom]});
		this.setState({
			atomList: list
		}, () => {
			console.log(this.state)
		});
	},
	handleUpdateAtomNumber: function(e) {
		this.setState({
			atomNumber: e.target.value
		});
	},
	handleUpdateAtomSymbol: function(e) {
		this.setState({
			atomSymbol: e.target.value
		});
	},
	handleUpdateAtomName: function(e) {
		this.setState({
			atomName: e.target.value
		});
	},
	handleUpdateAtomWeight: function(e) {
		this.setState({
			atomWeight: e.target.value
		});
	},

	render: function() {
		return (
			<Atom
				onSubmitAtom={this.handleSubmitAtom}
				onUpdateAtomNumber={this.handleUpdateAtomNumber}
				onUpdateAtomSymbol={this.handleUpdateAtomSymbol}
				onUpdateAtomName={this.handleUpdateAtomName}
				onUpdateAtomWeight={this.handleUpdateAtomWeight}
			/>
		)
	}
});

module.exports = AtomContainer;
