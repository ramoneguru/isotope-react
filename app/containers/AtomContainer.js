/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var Atom = require('../components/Atom');
var AtomDisplay = require('../components/AtomDisplay');
var Preview = require('../components/Preview');
var List = require('../components/List');
var Sorter = require('../components/Sorter');

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
			originalIndex: 0,
			top: "0px",
			left: "0px",
			atomList: [
				{
					"atomNumber": "1",
					"atomSymbol": "K",
					"atomName": "Potassium",
					"atomWeight": "1.23",
					"atomColor": "red",
					"originalIndex": 0,
					"top": "0px",
					"left": "0px"
				},
				{
					"atomNumber": "22",
					"atomSymbol": "He",
					"atomName": "Helium",
					"atomWeight": "1",
					"atomColor": "teal",
					"originalIndex": 1,
					"top": "0px",
					"left": "110px"
				},
				{
					"atomNumber": "12",
					"atomSymbol": "Fe",
					"atomName": "Iron",
					"atomWeight": "32.3",
					"atomColor": "blue",
					"originalIndex": 2,
					"top": "0px",
					"left": "220px"
				}
			]
		}
	},

	handleSubmitAtom: function(e) {
		var atom, list, top, largest, left;
		e.preventDefault();

		// 110 is due to the width of the container + padding
		largest = this.state.atomList.reduce((prev, curr) => {
			return (parseInt(prev.left) > parseInt(curr.left)) ? prev : curr;
		});
		left = parseInt(largest.left) + 110 + "px";
		atom = {
			"atomNumber": this.state.atomNumber,
			"atomSymbol": this.state.atomSymbol,
			"atomName": this.state.atomName,
			"atomWeight": this.state.atomWeight,
			"atomColor": this.state.atomColor,
			"originalIndex": this.state.atomList.length - 1,
			"top": "0px",
			"left": left
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
	handleSortByName: function() {
		var sortedList, finalList, list = this.state.atomList.slice(0);
		sortedList = list.slice(0).sort((prev, curr) => {
			return prev.atomName > curr.atomName;
		});

		console.log(sortedList, list);

		var res = sortedList.map((item, i) => {
			item.left = i * 110 + "px";
			return item;
		});

		console.log(res);
		console.log(list);

		this.setState({
			atomList: list
		})
	},
	handleSortBySymbol: function() {

	},
	handleSortByNumber: function() {

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
						originalIndex={this.state.originalIndex}
					/>
				</Preview>
				<Sorter
					onSortByName={this.handleSortByName}
					onSortBySymbol={this.handleSortBySymbol}
					onSortByNumber={this.handleSortByNumber}
				/>
				<List atomList={this.state.atomList}/>
			</div>
		)
	}
});

module.exports = AtomContainer;
