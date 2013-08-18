define(['knockout', 'jquery', 'js/readonly'], function(ko, $, readonly) {
	'use strict';
	var model, input;
	module('General');

	test('does not attach itself to knockout automatically', function() {
		ok(!ko.bindingHandlers.readonly);
	});

	test('returns update function', function() {
		ok(readonly.update);
	});


	module('Binding', {
		fixture: '<input id="input1" data-bind="readonly : value" />',
		setup: function() {
			//attach it to knockout for the remainder of the test
			ko.bindingHandlers.readonly = readonly;
			model = {
				value: ko.observable()
			};

			input = $('#input1');

			ko.applyBindings(model);
		},
		teardown: function() {

		}
	});

	test('we have a binding', function() {
		ok(ko.bindingHandlers.readonly);
	});

	test('Element does not have attribute reaonly when undefined', function() {
		ok(!input.attr('readonly'));
	});

	test('Element has attribute readonly when observable is truthy', function() {
		model.value(true);
		ok(input.attr('readonly'));
	});

	test('Element does not have attribute when set back to falsy', function() {
		model.value(true);
		ok(input.attr('readonly'));
		model.value(false);
		ok(!input.attr('readonly'));
		model.value(null);
		ok(!input.attr('readonly'));
		model.value(undefined);
		ok(!input.attr('readonly'));
		model.value('');
		ok(!input.attr('readonly'));
	});
});
