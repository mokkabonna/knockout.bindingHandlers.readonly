# Readonly binding for knockout

## Usage

HTML

	<input type="text" data-bind="readonly : myObservable" >

JS

	ko.applyBindings({
		myObservable : ko.observable()
	});


This binding is written in AMD. Just require it to init it. It will return the binding object and you will have to attach it to the desired knockout binding name yourself. This is to prevent conflict with another bindings. You can for instance do this in a custom knockout module that combines knockout and your custom bindings.

	define('knockout', ['bindings/readonly', 'bindings/otherbinding',  'libs/knockout'], function(readonly, otherbinding, ko){
		ko.bindingHandlers.readonly = readonly;
		ko.bindingHandlers.otherbinding = otherbinding;
		return ko;
	});

Now you can use your customized knockout in your project.

	define(['knockout'], function(ko){
		//use your custom knockout
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
