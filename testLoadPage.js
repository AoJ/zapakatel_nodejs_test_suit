var browser = require('./browser.config.js'),
selectors = require('./tools/selectors.js');

browser.debug = true;
browser.waitFor = 100;
browser.runScripts = false;


var app = require('express').createServer();
var cityMapper = {
	'1000' : { lang: 'cs', slug: 'praha'}
};
var getCity = function(id) { return cityMapper[id]; };


var parsePage = function(browser) {
	return {
		//sideDeals: selectors.getSideDealsIds(browser.document),
		menuList: selectors.getMenuList(browser.document)
	};
};

var loadPage = function(browser, city, page, cb) {
	var urlElements = getCity(city);
	console.log(1);
	browser.visit(urlElements.lang + '/' + urlElements.slug + '/' + page, function(){
		console.log(2);
		cb(pageInspection = parsePage(browser));
	});
};

app.get('/', function(req, res){
	loadPage(browser, 1000, 'kategorie/elektro', function(inspection){
		res.send(inspection);
	});
});

loadPage(browser, 1000, 'kategorie/elektro', function(inspection){
		console.log(inspection.menuList);
	});

//app.listen(3001);


