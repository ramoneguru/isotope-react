/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var Atom = require('../components/Atom');
var AtomDisplay = require('../components/AtomDisplay');
var Preview = require('../components/Preview');
var List = require('../components/List');
var Sorter = require('../components/Sorter');
var Filter = require('../components/Filter');

var update = require('react-addons-update');

require('../styles/components/atom.scss');

var AtomContainer = React.createClass({
	getInitialState: function() {
		return {
			atom: {
				atomNumber: '0',
				atomSymbol: 'Ex',
				atomName: 'Symbol name',
				atomWeight: '0',
				atomColor: '',
				atomType: 'metal',
				originalIndex: 0,
				visible: true,
				top: 0,
				left: 0
			},
			atomWidth: 100,
			atomHeight: 100,
			atomPadding: 10,
			atomListColumns: 3,
			atomList: [
				{
					"atomNumber": "1",
					"atomSymbol": "K",
					"atomName": "Potassium",
					"atomWeight": "1.23",
					"atomColor": "red",
					"originalIndex": 0,
					"visible": true,
					"atomType": 'metal',
					"top": 0,
					"left": 0
				},
				{
					"atomNumber": "22",
					"atomSymbol": "He",
					"atomName": "Helium",
					"atomWeight": "1",
					"atomColor": "teal",
					"originalIndex": 1,
					"visible": true,
					"atomType": 'transition',
					"top": 0,
					"left": 110
				},
				{
					"atomNumber": "12",
					"atomSymbol": "Fe",
					"atomName": "Iron",
					"atomWeight": "32.3",
					"atomColor": "blue",
					"originalIndex": 2,
					"visible": true,
					"atomType": 'ium',
					"top": 0,
					"left": 220
				},
				{
					"atomNumber": "12",
					"atomSymbol": "Se",
					"atomName": "Iron",
					"atomWeight": "32.3",
					"atomColor": "blue",
					"originalIndex": 3,
					"visible": true,
					"atomType": 'metal',
					"top": 110,
					"left": 0
				}
			]
		}
	},

	handleSubmitAtom: function(e) {
		var atom, list, top, largest, left, mapping = [];
		e.preventDefault();

		largest = this.state.atomList.filter((item) => {
			return item.visible;
		}).reduce((prev, curr) => {
			return (prev.top > curr.top) ? prev : curr;
		});

		if(this.state.atomList.length === 0) {
			top = 0;
			left = 0;
		} else if(largest.left === 0) {
			top = largest.top;
			left = largest.left + this.state.atomWidth + this.state.atomPadding;
		} else if(largest.left === ((this.state.atomListColumns - 1) * (this.state.atomWidth + this.state.atomPadding))) {
			top = largest.top + this.state.atomHeight + this.state.atomPadding;
			left = 0;
		} else {
			top = largest.top;
			left = largest.left + this.state.atomWidth + this.state.atomPadding;
		}

		atom = {
			"atomNumber": this.state.atom.atomNumber,
			"atomSymbol": this.state.atom.atomSymbol,
			"atomName": this.state.atom.atomName,
			"atomWeight": this.state.atom.atomWeight,
			"atomColor": this.state.atom.atomColor,
			"atomType": this.state.atom.atomType,
			"originalIndex": this.state.atomList.length - 1,
			"visible": true,
			"top": top,
			"left": left
		};

		list = update(this.state.atomList, {$push: [atom]});
		this.setState({
			atomList: list
		});
	},
	handleUpdateAtom: function(e) {
		var updatedAtom, obj = {};
		obj[e.target.id] = e.target.value;
		updatedAtom = update(this.state.atom, {$merge: obj});
		this.setState({
			atom: updatedAtom
		})
	},
	handleSorting: function(sortBy) {
		var list = this.state.atomList.slice(0);
		var filterList = list.filter((item) => {
			if(item.visible) {
				return item;
			}
		}).sort((prev, curr) => {
			return prev[sortBy] > curr[sortBy];
		}).map(this.setOffset);
		this.setState({
			atomList: list
		});
	},
	handleFiltering: function(filter) {
		var list = this.state.atomList.slice(0);
		var filterList = list.filter((item) => {
			if(item.atomType === filter || filter === "all") {
				item.visible = true;
				return true;
			} else {
				item.visible = false;
				return false;
			}
		}).map(this.setOffset);

		this.setState({
			atomList: list
		});

	},
	setOffset: function(item, i) {
		var top, left, atomWidth = this.state.atomWidth + this.state.atomPadding,
			atomHeight = this.state.atomWidth + this.state.atomPadding;

		if(i % this.state.atomListColumns === 0) {
			top = (i === 0) ? 0 : Math.floor(i / this.state.atomListColumns) * atomHeight;
			left = 0;
		} else {
			top = Math.floor(i / this.state.atomListColumns) * atomHeight;
			left = (i % this.state.atomListColumns) * atomWidth;
		}
		item.top = top;
		item.left = left;
		return item;
	},
	render: function() {
		return (
			<div className="atom-container">
				<Atom
					onSubmitAtom={this.handleSubmitAtom}
					onUpdateAtomNumber={this.handleUpdateAtom}
					onUpdateAtomSymbol={this.handleUpdateAtom}
					onUpdateAtomName={this.handleUpdateAtom}
					onUpdateAtomWeight={this.handleUpdateAtom}
					onUpdateAtomColor={this.handleUpdateAtom}
					onUpdateAtomType={this.handleUpdateAtom}
				/>
				<Preview>
					<AtomDisplay
						atomNumber={this.state.atom.atomNumber}
						atomSymbol={this.state.atom.atomSymbol}
						atomName={this.state.atom.atomName}
						atomWeight={this.state.atom.atomWeight}
						atomColor={this.state.atom.atomColor}
						originalIndex={this.state.atom.originalIndex}
						visible={this.state.atom.visible}
						top={this.state.atom.top}
						left={this.state.atom.left}
					/>
				</Preview>
				<Sorter
					onSortByAll={this.handleFiltering.bind(this, 'all')}
					onSortByName={this.handleSorting.bind(this, 'atomName')}
					onSortBySymbol={this.handleSorting.bind(this, 'atomSymbol')}
					onSortByNumber={this.handleSorting.bind(this, 'atomNumber')}
					onSortByOriginalOrder={this.handleSorting.bind(this, 'originalOrder')}
				/>
				<Filter
					onFilterShowAll={this.handleFiltering.bind(this, 'all')}
					onFilterMetal={this.handleFiltering.bind(this, 'metal')}
					onFilterTransition={this.handleFiltering.bind(this, 'transition')}
					onFilterIum={this.handleFiltering.bind(this, 'ium')}
				/>
				<List
					atomList={this.state.atomList}
					atomListColumns={this.state.atomListColumns}
				/>
			</div>
		)
	}
});

module.exports = AtomContainer;