var React = require('react');
var Chai = require('chai');
var Enzyme = require('enzyme');

var Element = require('./element.spec');

describe("A suite", () => {
	it("contains spec with an expectation", () => {
		expect(shallow(<Element />).contains(<div className="element" />)).to.equal(true);
	});

	it("contains spec with an expectation", () => {
		expect(shallow(<Element />).is('.element')).to.equal(true);
	});

	it("contains spec with an expectation", () => {
		expect(mount(<Element />).find('.element').length).to.equal(1);
	});
});
