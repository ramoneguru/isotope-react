/**
 * Created by ifthenelse on 4/27/16.
 */


var helpers = {
	/**
	 * Compare function for sorting which is used in javascript's .sort.
	 * @param a
	 * @param b
	 * @param sortBy
	 * @returns {number}
	 */
	determineSort: function(a, b, sortBy) {
		if(a[sortBy] > b[sortBy]) { return 1; }
		if(a[sortBy] < b[sortBy]) { return -1; }
		return 0;
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
				threshold = threshold || 250,
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
		var timer, later;
		return function() {
			var context = thisArg || this,
				threshold = threshold || 100,
				runNow = runNow || false,
				args = arguments;

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