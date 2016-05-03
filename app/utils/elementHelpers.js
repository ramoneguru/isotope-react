/**
 * Created by ifthenelse on 4/27/16.
 */


var helpers = {
	/**
	 * Returns all the visible items in the list, checks the item.visible bool value
	 * in order to dertermine if an item is visible or not.
	 * @param list
	 * @returns {*}
	 */
	getVisibleItems: function(list) {
		return list.filter((item) => {
			if(item.visible) {
				return item;
			}
		});
	},
	/**
	 * Returns the last element in the list that is visible and has the largest
	 * top value.
	 * @param list
	 * @returns {*}
	 */
	getLastSpot: function(list) {
		return this.getVisibleItems(list).reduce((prev, curr) => {
			return (prev.currentIndex >= curr.currentIndex) ? prev : curr ;
		}, 0);
	},
	/**
	 * Compare function for sorting which is used in javascript's sort.
	 * @param a
	 * @param b
	 * @param sortBy
	 * @returns {number}
	 */
	getSortByLargest: function(a, b, sortBy) {
		if(a[sortBy] > b[sortBy]) { return 1; }
		if(a[sortBy] < b[sortBy]) { return -1; }
		return 0;
	},
	/**
	 * Returns the row and column size based on the container width and item width.
	 * @param listSize
	 * @param containerWidth
	 * @param itemWidth
	 * @returns {{}}
	 */
	getRowsAndColumns: function(listSize, containerWidth, itemWidth) {
		var columns = Math.floor(containerWidth / itemWidth);
		var rows = Math.ceil(listSize / columns);
		return {
			rows: rows,
			columns: columns
		};
	},
	getPlacementSpot: function(lastSpot, columns, itemWidth, itemHeight) {
		var placement = {};
		if(lastSpot.left < Math.floor((columns - 1) * itemWidth)) {
			placement.top = lastSpot.top;
			placement.left = lastSpot.left + itemWidth;
		} else {
			placement.top = lastSpot.top + itemHeight;
			placement.left = 0;
		}
		return placement;
	},
	/**
	 * Throttles execution of an event with a default threshold of 250ms
	 * @param fn
	 * @param threshold
	 * @param thisArg
	 * @returns {Function}
	 */
	throttle: function(fn, threshold, thisArg) {
		var later, last = 0;
		return function() {
			var args = arguments,
				context = thisArg || this,
				threshold = (threshold) ? threshold : 300,
				now = +new Date;

			if(last && now < last + threshold) {
				clearTimeout(later);
				later = setTimeout(() => {
					last = now;
					fn.apply(context, args);
				}, threshold);
			} else {
				last = now;
				fn.apply(context, args);
			}
		}
	},
	/**
	 * Debounces execution of an event, can also run immediately with the runNow flag set to true
	 * @param fn
	 * @param threshold
	 * @param runNow
	 * @param thisArg
	 * @returns {Function}
	 */
	debounce: function(fn, threshold, runNow, thisArg) {
		var timer = 0, later;
		return function() {
			var context = thisArg || this,
				runNow = (runNow) ? true : false,
				args = arguments,
				threshold = (threshold) ? threshold : 300;

			later = () => {
				if(!runNow) {
					fn.apply(context, args);
				}
				timer = null;
			};

			if(timer) {
				clearTimeout(timer);
			} else if(runNow) {
				fn.apply(context, args);
			}

			timer = setTimeout(later, threshold);
		};
	}
};

module.exports = helpers;