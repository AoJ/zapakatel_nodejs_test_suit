// module dependencies
var req = require('./req');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();

// Simple Example (defaults to GET)
mylib.urlReq('wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=27739899', function(body, res){

    // do your stuff

});


/*
// More complex Example 2
mylib.urlReq('http://mysite.local:82/newUser', {
    method: 'POST',
    params:{
        name: 'Tester',
        email: 'Tester@example.com',
        password: 'password'
    }
}, function(body, res){

    // do your stuff

});*/