/**
 * Created by ifthenelse on 4/22/16.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Element = require('../components/Element');
var ElementDisplay = require('../components/ElementDisplay');
var Preview = require('../components/Preview');
var List = require('../components/List');
var Sorter = require('../components/Sorter');
var Filter = require('../components/Filter');
var Helpers = require('../utils/elementHelpers');

var update = require('react-addons-update');

require('../styles/components/elementContainer.scss');
require('../styles/components/element.scss');
require('../styles/components/form.scss');

var ElementContainer = React.createClass({
	getInitialState: function() {
		return {
			element: {
				number: '0',
				symbol: 'Ex',
				name: 'Symbol name',
				weight: '0',
				type: 'metal',
				originalIndex: 0,
				currentIndex: 0,
				visible: true,
				top: 0,
				left: 0
			},
			elementWidth: 100,
			elementHeight: 100,
			elementPadding: 10,
			elementFullWidth: 110,
			elementFullHeight: 110,
			elementListColumns: 1,
			elementListHeight: 300,
			elementListWidth: 300,
			elementFilter: "all",
			elementSort: "all",
			elementList: [
				{
					"number": "1",
					"symbol": "K",
					"name": "Potassium",
					"weight": "1.23",
					"originalIndex": 0,
					"currentIndex": 0,
					"visible": true,
					"type": 'metal',
					"top": 0,
					"left": 0
				},
				{
					"number": "2",
					"symbol": "He",
					"name": "Helium",
					"weight": "1",
					"originalIndex": 1,
					"currentIndex": 1,
					"visible": true,
					"type": 'transition',
					"top": 0,
					"left": 0
				},
				{
					"number": "4",
					"symbol": "Fe",
					"name": "Iron",
					"weight": "32.3",
					"originalIndex": 2,
					"currentIndex": 2,
					"visible": true,
					"type": 'ium',
					"top": 0,
					"left": 0
				},
				{
					"number": "3",
					"symbol": "Se",
					"name": "Sodium",
					"weight": "32.3",
					"originalIndex": 3,
					"currentIndex": 3,
					"visible": true,
					"type": 'metal',
					"top": 0,
					"left": 0
				}
			]
		}
	},
	componentDidMount: function() {
		var list = this.state.elementList.slice(0);
		var visibleList = Helpers.getVisibleItems(list);
		var dimensions = this.getDimensions();

		visibleList.map((item, i) => {
			return this.setOffset(item, i, dimensions.columns);
		});

		this.setState({
			elementList: list,
			elementListColumns: dimensions.columns,
			elementListHeight: (dimensions.rows * this.state.elementFullHeight)
		});
	},
	/**
	 * Handle for when the user submits the element form. 
	 * @param e
	 */
	handleSubmitElement: function(e) {
		var element, lastSpot, offset, dimensions, list, listCurrentWidth ;
		e.preventDefault();

		listCurrentWidth = ReactDOM.findDOMNode(this.refs.element_list).offsetWidth;
		lastSpot = Helpers.getLastSpot(this.state.elementList);
		offset = Helpers.getPlacementSpot(lastSpot, this.state.elementListColumns, this.state.elementFullWidth, this.state.elementFullHeight);

		element = {
			"number": this.state.element.number,
			"symbol": this.state.element.symbol,
			"name": this.state.element.name,
			"weight": this.state.element.weight,
			"type": this.state.element.type,
			"originalIndex": this.state.elementList.length - 1,
			"currentIndex": Helpers.getVisibleItems(this.state.elementList).length,
			"visible": true,
			"top": offset.top,
			"left": offset.left
		};

		list = update(this.state.elementList, {$push: [element]});
		dimensions = Helpers.getRowsAndColumns(Helpers.getVisibleItems(list).length, listCurrentWidth, this.state.elementFullWidth);
		this.setState({
			elementList: list,
			elementListColumns: dimensions.columns,
			elementListHeight: (dimensions.rows * this.state.elementFullHeight)
		});
	},

	/**
	 * Handle when the user inputs something into the form.
	 * @param e
	 */
	handleUpdateElement: function(e) {
		// Target id will come in as element-property so split on "-"
		var updatedElement, obj = {}, values = e.target.id.split("-");
		obj[values[1]] = e.target.value;
		updatedElement = update(this.state.element, {$merge: obj});
		this.setState({
			element: updatedElement
		})
	},

	/**
	 * Handle when the user taps any of the sort buttons
	 * @param sortBy
	 */
	handleSorting: function(sortBy) {
		var list = this.state.elementList.slice(0);
		var filterList = Helpers.getVisibleItems(list).sort((prev, curr) => {
			return Helpers.getSortByLargest(prev, curr, sortBy);
		}).map((item, i) => {
			item.currentIndex = i;
			return this.setOffset(item, i);
		});

		this.setState({
			elementList: list,
			elementSort: sortBy
		})
	},

	/**
	 * Handle when the user taps any of the filter buttons
	 * @param filter
	 */
	handleFiltering: function(filter) {
		var dimensions;
		var list = this.state.elementList.slice(0);
		var filterList = list.filter((item) => {
			if(item.type === filter || filter === "all") {
				item.visible = true;
				return true;
			} else {
				item.visible = false;
				return false;
			}
		}).map((item, i) => {
			item.currentIndex = i;
			return this.setOffset(item, i);
		});

		dimensions = this.getDimensions();

		this.setState({
			elementFilter: filter,
			elementList: list,
			elementListColumns: dimensions.columns,
			elementListHeight: (dimensions.rows * this.state.elementFullHeight)
		});
	},

	/**
	 * Handles resizing the element container based on the dimensions acquired from
	 * this.getDimensions().
	 * @param e
	 */
	handleListResize: function(e) {
		var dimensions = this.getDimensions();
		var list = this.state.elementList.slice(0);
		var map = this.getResizeMap(dimensions);
		var obj;
		var filterList = Helpers.getVisibleItems(list).map((item, i) => {
			obj = map[item.currentIndex];
			if(obj) {
				item.top = obj.top;
				item.left = obj.left;
			}
			return item;
		});

		this.setState({
			elementList: list,
			elementListColumns: dimensions.columns,
			elementListHeight: (dimensions.rows * this.state.elementFullHeight)
		});
	},

	/**
	 * Returns the hash table that can be created with the given dimensions.
	 * @param dimensions
	 * @returns {{}}
	 */
	getResizeMap: function(dimensions) {
		var map = {}, i, j, indexCount = 0;
		for(i = 0; i < dimensions.rows; i += 1) {
			for(j = 0; j < dimensions.columns; j += 1) {
				map[indexCount] = {
					"currentIndex": indexCount,
					"top": i * this.state.elementFullHeight,
					"left": j * this.state.elementFullWidth
				};
				indexCount++;
			}
		}
		return map;
	},

	/**
	 * Gets the current dimensions which is the number of possible rows and columns
	 * the container can have. This calculation is based on the ref element_list
	 * @returns {*|{rows, columns}|{}}
	 */
	getDimensions: function() {
		var listCurrentWidth = ReactDOM.findDOMNode(this.refs.element_list).offsetWidth;
		var list = this.state.elementList.slice(0);
		var visibleList = Helpers.getVisibleItems(list);
		return Helpers.getRowsAndColumns(visibleList.length, listCurrentWidth, this.state.elementFullWidth);
	},

	/**
	 * Set the offset(s) of the element. This is primarily used when the user sorts or filters
	 * elements in the set.
	 * @param item
	 * @param i
	 * @param cols
	 * @returns {*}
	 */
	setOffset: function(item, i, cols) {
		var top, left, elementWidth = this.state.elementFullWidth, elementHeight = this.state.elementFullHeight,
			cols = (cols === undefined) ? this.state.elementListColumns : cols;
		if(i % cols === 0) {
			top = (i === 0) ? 0 : Math.floor(i / cols) * elementHeight;
			left = 0;
		} else {
			top = Math.floor(i / cols) * elementHeight;
			left = (i % cols) * elementWidth;
		}
		item.top = top;
		item.left = left;
		return item;
	},
	render: function() {
		return (
			<div className="element-container">
				<Element
					onSubmitElement={this.handleSubmitElement}
					onUpdateElementNumber={this.handleUpdateElement}
					onUpdateElementSymbol={this.handleUpdateElement}
					onUpdateElementName={this.handleUpdateElement}
					onUpdateElementWeight={this.handleUpdateElement}
					onUpdateElementType={this.handleUpdateElement}
				/>
				<Preview>
					<ElementDisplay
						number={this.state.element.number}
						symbol={this.state.element.symbol}
						name={this.state.element.name}
						weight={this.state.element.weight}
						type={this.state.element.type}
						originalIndex={this.state.element.originalIndex}
						visible={this.state.element.visible}
						top={this.state.element.top}
						left={this.state.element.left}
					/>
				</Preview>
				<Sorter
					onSortByAll={this.handleFiltering.bind(this, 'all')}
					onSortByName={this.handleSorting.bind(this, 'name')}
					onSortBySymbol={this.handleSorting.bind(this, 'symbol')}
					onSortByNumber={this.handleSorting.bind(this, 'number')}
					onSortByOriginalOrder={this.handleSorting.bind(this, 'originalIndex')}
				/>
				<Filter
					onFilterShowAll={this.handleFiltering.bind(this, 'all')}
					onFilterMetal={this.handleFiltering.bind(this, 'metal')}
					onFilterTransition={this.handleFiltering.bind(this, 'transition')}
					onFilterIum={this.handleFiltering.bind(this, 'ium')}
				/>
				<List ref="element_list"
					elementList={this.state.elementList}
					elementListHeight={this.state.elementListHeight}
					onListResize={Helpers.debounce(this.handleListResize, 1000)}
				/>
			</div>
		)
	}
});

module.exports = ElementContainer;