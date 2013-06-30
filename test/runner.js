(function() {

	require.config({
		baseUrl: '../base/app',
		paths: {
			knockout: 'vendor/knockout/index',
			jquery: 'js/jquery.noglobals'
		}
	});


	require(['../test/helper', '../test/readonly'], function(helper, number) {
		window.__karma__.start();
	});

})();
