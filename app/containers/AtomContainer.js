/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var Atom = require('../components/Atom');
var AtomDisplay = require('../components/AtomDisplay');
var Preview = require('../components/Preview');
var List = require('../components/List');
var update = require('react-addons-update');

require('../styles/components/atom.scss');

var AtomContainer = React.createClass({
	getInitialState: function() {
		return {
			atomNumber: '0',
			atomSymbol: 'Ex',
			atomName: 'Symbol name',
			atomWeight: '0',
			atomColor: '',
			atomList: []
		}
	},

	handleSubmitAtom: function(e) {
		var atom, list;
		e.preventDefault();
		atom = {
			"atomNumber": this.state.atomNumber,
			"atomSymbol": this.state.atomSymbol,
			"atomName": this.state.atomName,
			"atomWeight": this.state.atomWeight,
			"atomColor": this.state.atomColor
		};
		list = update(this.state.atomList, {$push: [atom]});
		this.setState({
			atomList: list
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
	handleUpdateAtomColor: function(e) {
		this.setState({
			atomColor: e.target.value
		});
	},

	render: function() {
		return (
			<div className="atom-thing">
				<Atom
					onSubmitAtom={this.handleSubmitAtom}
					onUpdateAtomNumber={this.handleUpdateAtomNumber}
					onUpdateAtomSymbol={this.handleUpdateAtomSymbol}
					onUpdateAtomName={this.handleUpdateAtomName}
					onUpdateAtomWeight={this.handleUpdateAtomWeight}
					onUpdateAtomColor={this.handleUpdateAtomColor}
				/>
				<Preview>
					<AtomDisplay
						atomNumber={this.state.atomNumber}
						atomSymbol={this.state.atomSymbol}
						atomName={this.state.atomName}
						atomWeight={this.state.atomWeight}
						atomColor={this.state.atomColor}
					/>
				</Preview>
				<List atomList={this.state.atomList}/>
			</div>
		)
	}
});

module.exports = AtomContainer;
