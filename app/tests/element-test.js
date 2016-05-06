import React from 'react';

import { shallow, mount, render } from 'enzyme';
import Element from '../components/Element';

describe("<Element />", () => {
	it("should have the className element-input", function() {
		expect(shallow(<Element
							onSubmitElement={() => {}}
							onUpdateElementNumber={() => {}}
							onUpdateElementName={() => {}}
							onUpdateElementSymbol={() => {}}
							onUpdateElementWeight={() => {}}
							onUpdateElementType={() => {}}

						/>).is(".element-input")).toBe(true);
	});

});
