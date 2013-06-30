# Readonly binding for knockout

## Usage

HTML

	<input type="text" data-bind="readonly : myObservable" >

JS

	ko.applyBindings({
		myObservable : ko.observable()
	});


This binding is written in AMD. Just require it to init it. It will attach itself to knockout globally. No need to require it more than once. It will also return knockout.

	define(['somefolder/readonly'], function(ko){
		//use knockout
	});

## Behaviour

Sets the readonly attribute if the observable is truthy.

## Demo

There is a demo at http://mokkabonna.github.io/knockout.bindingsHandlers.readonly

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install
    grunt bower //this is to install all bower packages

You can now use grunt to run tests, lint etc.

    grunt
