var browser = require('../browser.config.js');
var _ = require('underscore');
var assert = require('assert');

browser.debug = true;
browser.waitFor = 500;
browser.runScripts = false	;



browser.visit("", function() {
	browser.visit('/cs/brno', function() {
		assert.equal(browser.document.cookies.preferred_city, 'brno');
		browser.visit('/vanoce', function(){
			assert.equal(browser.document.cookies.preferred_city, 'brno');
			var dealA = browser.document.querySelectorAll(".standby-deal a")._childNodes[0];
			assert.ok(dealA.href.indexOf('/brno') > 0);
		});
	})
	var sideDeals = cityCookies(browser.document,browser);
});
