/* =========================================================================
 *
 * example-calls.js
 *      Sample options config and logs
 *  
 * ========================================================================= */
var logger = require('../lib/bragi');
logger.options.groupsEnabled = true; // enable everything
logger.transports.add( new logger.transportClasses.File({
    //// MUST specify a file name. Uncomment to test:
    //filename: './test.txt',
	format: function (loggedObject) {
		return [
			new Date(loggedObject.unixTimestamp * 1000).toISOString(),
			"[ " + loggedObject.group + " ]",
			loggedObject.message
		].join(' ');
	}
}));

for(var i=0; i<20; i++){
    logger.log('group' + (i%5), 'test write', { i: i, random: Math.random() });
}
