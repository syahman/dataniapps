(function(wrn){

	'use strict';

	wrn.removeDestroyed = function(obj){
		'use strict';
		//create object
		var localStorageObj = JSON.parse(localStorage[obj]);
		//remove destroyed objects
		_.remove(localStorageObj,function(obj){
			return obj.__state__ === 'destroy';
		});
		//set localStorage
		localStorage.setItem(obj,JSON.stringify(localStorageObj));
	};

})(wrn); //pass in global namespace