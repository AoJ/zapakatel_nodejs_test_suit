require('./errorHandler.js');
var request = require('./tools/request.js');
var amanda = require('amanda');
var app = require('express').createServer();
var _ = require('underscore');
var moment = require('moment');

var schemaRepository = require('./schema/dealSchema.js');





var DealModelgetDealById = function(start, res, id) {
	var url = 'http://beta-api.zapakatel.cz/www/nette/www/api-mobile/get-deal-by-id/';
	var post = {
		method: 'DealModelGetDealById',
		params: id
	};
	var startRequest = moment();

	request.urlReq(url+id, {
		method: 'GET'
	}, function(body){

		requestTime = moment().valueOf() - startRequest.valueOf();


		var error;
		try { var data = JSON.parse(body); }
		catch (e) { error = e; }
		
		var schema = {
			"type":"object",
			"properties":{}
		};

		if(data) _.each((_.keys(data)), function(dealId) {
			schema.properties[dealId] = schemaRepository.deal
		});

		var response = {
			url: url,
			post: post,
			apiRequestTime: requestTime + 'ms',
			responseTime: null,
			status: null,
			error: null,
			//schema: schema,
			data: data
		};
		if(!data) response.rawData = body;

		amanda.validate(data, schema, function(error) {
			if (error) {
				response.status = 'FAILED';
				response.error = error;
			} else {
				response.status = 'OK';
			}
			response.responseTime = (moment().valueOf() - start.valueOf()) + 'ms';
			res.send(response);
		});

	});
};

app.get('/:method/*', function(req, res){

	res.header('X-Powered-By', 'n13.cz');

	switch(req.param('method')) {
		case 'DealModelgetDealById': DealModelgetDealById(moment(), res, parseInt(req.param('id'))); break;
		default: res.send({status: 'FAILED', error: 'method ' + req.param('method') + ' not implemented'}); break;
	}
});
console.log("app listen on 3001 port");
app.listen(3001);


