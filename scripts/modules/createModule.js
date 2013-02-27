if(typeof jw === 'undefined'){
	jw = {}
}

jw.createModule = function(){
	//console.log('create module - ' + module, arguments);
	var that = this,
		args = arguments, 
		module, options, $appendToElement, callback;

	for(var arg=0, argsLength=args.length; arg<argsLength; arg++){
		var myArg = args[arg];

		if(typeof(myArg) === 'string'){
			module = myArg;
		}else if(typeof(myArg) === 'function'){
			callback = myArg;
		}else if(myArg.nodeName){
			$appendToElement = $(myArg);
		}else if(typeof(myArg) === 'object'){
			if(myArg.length){
				$appendToElement = myArg
			}else{
				options = myArg
			}
		}
	}

	if(!jw.moduleCount){
		jw.moduleCount = 0;
	}

	jw.moduleCount++;

	require(['modules/' + module], function(theModule){
		var myOptions, myElement, myModule;

		myOptions = options || {};

		//If id is not supplied with the object, create a unique id for the element
		if(!myOptions.id){
			myOptions.id = module + '_' + jw.moduleCount;
		}

		//Instatiate object
		myModule = Object.create(theModule);

		//Run initialization
		myModule._init(myOptions, $appendToElement);

		//Fire callback passing the new object as the argument
		if(callback){
			callback(myModule);
		}
	});
}

if ( typeof define === "function" && define.amd ) {
	define( ['require', 'jquery'], function (require, $) { return jw.createModule; } );
}