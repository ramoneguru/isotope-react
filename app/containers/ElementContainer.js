/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Element = require('../components/Element');
var AtomDisplay = require('../components/AtomDisplay');
var Preview = require('../components/Preview');
var List = require('../components/List');
var Sorter = require('../components/Sorter');
var Filter = require('../components/Filter');
var Helpers = require('../utils/isotopeHelpers');

var update = require('react-addons-update');

require('../styles/components/atom.scss');

var ElementContainer = React.createClass({
	getInitialState: function() {
		return {
			atom: {
				atomNumber: '0',
				atomSymbol: 'Ex',
				atomName: 'Symbol name',
				atomWeight: '0',
				atomColor: '#757575',
				atomType: 'metal',
				originalIndex: 0,
				visible: true,
				top: 0,
				left: 0
			},
			atomWidth: 100,
			atomHeight: 100,
			atomPadding: 10,
			atomFullWidth: 110,
			atomFullHeight: 110,
			atomListColumns: 3,
			atomListHeight: 300,
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
					"left": 0
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
					"left": 0
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
					"top": 0,
					"left": 0
				}
			]
		}
	},
	componentDidMount: function() {
		this.handleListResize();
	},
	handleSubmitElement: function(e) {
		var atom, list;
		e.preventDefault();

		atom = {
			"atomNumber": this.state.atom.atomNumber,
			"atomSymbol": this.state.atom.atomSymbol,
			"atomName": this.state.atom.atomName,
			"atomWeight": this.state.atom.atomWeight,
			"atomColor": this.state.atom.atomColor,
			"atomType": this.state.atom.atomType,
			"originalIndex": this.state.atomList.length - 1,
			"visible": true,
			"top": 0,
			"left": 0
		};

		list = update(this.state.atomList, {$push: [atom]});
		this.setState({
			atomList: list
		}, () => {
			this.handleListResize();
		});
	},
	handleUpdateElement: function(e) {
		var updatedAtom, obj = {};
		obj[e.target.id] = e.target.value;
		updatedAtom = update(this.state.atom, {$merge: obj});
		this.setState({
			atom: updatedAtom
		})
	},

	handleSorting: function(sortBy) {
		var list = this.state.atomList.slice(0);
		Helpers.getVisibleItems(list).sort((prev, curr) => {
			return Helpers.getSortByLargest(prev, curr, sortBy);
		}).map((item, i) => {
			this.setOffset(item, i);
		});

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
		});

		this.setState({
			atomList: list
		}, () => {
			this.handleListResize();
		});

	},

	handleListResize: function(e) {
		var listCurrentWidth = ReactDOM.findDOMNode(this.refs.list_tag).offsetWidth;
		var list = this.state.atomList.slice(0);
		var visibleList = Helpers.getVisibleItems(list);
		var dimensions = Helpers.getRowsAndColumns(visibleList.length, listCurrentWidth, this.state.atomFullWidth);

		visibleList.map((item, i) => {
			return this.setOffset(item, i, dimensions.columns);
		});

		this.setState({
			atomListColumns: dimensions.columns,
			atomList: list,
			atomListHeight: (dimensions.rows * this.state.atomFullHeight)
		});
	},

	setOffset: function(item, i, cols) {
		var top, left, atomWidth = this.state.atomFullWidth, atomHeight = this.state.atomFullHeight,
			cols = (cols === undefined) ? this.state.atomListColumns : cols;

		if(i % cols === 0) {
			top = (i === 0) ? 0 : Math.floor(i / cols) * atomHeight;
			left = 0;
		} else {
			top = Math.floor(i / cols) * atomHeight;
			left = (i % cols) * atomWidth;
		}
		item.top = top;
		item.left = left;
		return item;
	},
	render: function() {
		return (
			<div className="atom-container">
				<Element
					onSubmitElement={this.handleSubmitElement}
					onUpdateElementNumber={this.handleUpdateElement}
					onUpdateElementSymbol={this.handleUpdateElement}
					onUpdateElementName={this.handleUpdateElement}
					onUpdateElementWeight={this.handleUpdateElement}
					onUpdateElementColor={this.handleUpdateElement}
					onUpdateElementType={this.handleUpdateElement}
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
					onSortByOriginalOrder={this.handleSorting.bind(this, 'originalIndex')}
				/>
				<Filter
					onFilterShowAll={this.handleFiltering.bind(this, 'all')}
					onFilterMetal={this.handleFiltering.bind(this, 'metal')}
					onFilterTransition={this.handleFiltering.bind(this, 'transition')}
					onFilterIum={this.handleFiltering.bind(this, 'ium')}
				/>
				<List ref="list_tag"
					atomList={this.state.atomList}
					atomListHeight={this.state.atomListHeight}
					onListResize={Helpers.debounce(this.handleListResize, 1000)}
				/>
			</div>
		)
	}
});

module.exports = ElementContainer;