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
	 * Compare function for sorting which is used in javascript's .sort.
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

	getRowsAndColumns: function(listSize, containerWidth, itemWidth) {
		var totalItemWidth = listSize * itemWidth;
		var dimensions = {};
		if (totalItemWidth < containerWidth) {
			dimensions.columns = listSize;
			dimensions.rows = 1;
		} else {
			dimensions.columns = Math.floor(containerWidth / itemWidth);
			dimensions.rows = Math.ceil(listSize / dimensions.columns);
		}
		return dimensions;
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