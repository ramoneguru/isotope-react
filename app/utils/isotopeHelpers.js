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
	}
};

module.exports = helpers;