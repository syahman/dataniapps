(function(wrn){

	'use strict';

	wrn.makeId = function(){
		'use strict';
		var n = 0;
		var possible = "0123456789";
		for (var i = 0; i < 15; i++){
			n += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return Number(n);
	};

})(wrn); //pass in global namespace