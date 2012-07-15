var assert = require("assert");
var browser = require('../browser.config.js');

var cityMapper = {
	'1000' : { lang: 'cs', slug: 'praha'},
	'12282' : { lang: 'cs', slug: 'brno'}
};
var getCity = function(id) { return cityMapper[id]; };

exports.categoryCheck = function(options, city, cat, name) {
	var urlElements = getCity(city);
	all = !!options.all;
	var tests = {
		topic: function() {
			browser.visit(urlElements.lang + "/" + urlElements.slug + "/kategorie/"+cat, this.callback);
		}
	};

	tests['Stránka ' + name + ' načtena'] = function() {
		assert.ok(browser.success);
	};

	var baseTitle = ' | Zapakatel.cz - Praha';


	if(all || options.minDeals) tests['V kategorii ' + name + ' je alespoň 1 sleva'] = function() {
		var container = browser.querySelector('#content');
		var deals = browser.document.querySelectorAll(".box-rc-big", container);
		assert.strictEqual (deals.length > 0, true);
	};


	if(all || options.sideDeals) tests['Vedlejší slevy nejsou prázdné'] =  function() {
		assert.strictEqual (browser.queryAll(".right-panel-deal-image").length > 0, true);
	};


	if(all || options.categoryAnchor) tests['Odkaz na kategorii ' + name + ' je aktivní'] = function() {
		assert.lengthOf (browser.queryAll("#navigation .active."+cat), 1);
	};



	if(all || options.h1) tests['V h1 je ' + name] = function() {
		assert.include (browser.text('#content h1'), name);
	};
	

	if(all || options.titles) tests['nadpisy mají správné pořadí H1 > H2'] = function() {
		var titles = browser.queryAll('h1,h2');
		assert.equal(titles[0].nodeName, 'H1');
		assert.equal(titles[1].nodeName, 'H2');
	};

	return tests;
};