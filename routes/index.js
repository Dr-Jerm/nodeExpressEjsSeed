
/*
 * GET home page.
 */

var Util = require('util');
var FetchMyIp = require('../fetchMyIp');
var serverIp;
FetchMyIp.fetch( function (error, ipArray) {
    serverIp = ipArray[0];
});



exports.index = function(req, res){
    console.log(serverIp);
    var options = {
        serverIp: serverIp,
        clientIp: req.connection.remoteAddress
    }

    res.render('index', options);
};
