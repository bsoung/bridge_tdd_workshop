import React from "react";
import { shallow } from "enzyme";

import TextInput from "./index";

function setup() {
	const props = {};

	const enzymeWrapper = shallow(<TextInput {...props} />);

	return { props, enzymeWrapper };
}

describe("<TextInput />", () => {
	it("should render the component", () => {
		const { enzymeWrapper } = setup();

		expect(enzymeWrapper.length).toEqual(1);
		expect(enzymeWrapper.find(".super-input").length).toEqual(1);
	});

	it("should render with a placeholder attribute", () => {
		expect(enzymeWrapper.find(".super-input").prop("placeholder")).toEqual(
			"random"
		);
	});

	it("should render with a class of 'red' if more than 10 characters have been entered in", () => {
		const { enzymeWrapper } = setup();

		const component = enzymeWrapper.find(".super-input");

		if (component.length > 10) {
			expect(component.hasClass("red"));
		}
	});
});
