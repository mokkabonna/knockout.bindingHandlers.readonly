(function() {

	// Configure RequireJS so it resolves relative module paths from the `src` folder.
	require.config({
		baseUrl: "",
		paths: {
			knockout: 'vendor/knockout/index'
		}
	});


	require(['knockout', 'js/readonly'], function(ko, readonly) {
		ko.bindingHandlers.readonly = readonly;
		var viewModel = {
			value: ko.observable()
		};

		ko.applyBindings(viewModel);
	});
}());
