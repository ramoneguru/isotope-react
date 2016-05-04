/**
 * Created by ifthenelse on 5/2/16.
 */

var React = require('react');
var enzyme = require('enzyme');

describe('<Foo />', () => {
	it('should call componentDidMount', () => {
		const wrapper = mount('<Foo />');
		expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
	});
});

