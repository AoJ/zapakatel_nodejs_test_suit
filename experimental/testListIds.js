var browser = require('../browser.config.js');
var _ = require('underscore');

browser.debug = true;
browser.waitFor = 500;
browser.runScripts = false	;




var getSideDealsIds = function(document, browser) {

	var selectors = {
		dealText: function(sideDeal) {
			if(typeof sideDeal._childNodes !== 'undefined' && sideDeal._childNodes.length === 2)
				return sideDeal._childNodes[1].nodeValue;
			//console.log('error', sideDeal);
		},
		'dealId': function(sideDeal) {
			var pattern = new RegExp(/^.+id\-([0-9]+)\-{2}.*$/);
			result = sideDeal.href.match(pattern);
			if(result.length === 2) return result[1];
			//else errors.push(sideHref, result);
		}
	};

	var sides = document.querySelectorAll("#right-panel .right-panel-deal-image a.right-panel-deal-overlay");
	var hrefs = _.pluck(sides, 'href');
	var ids = _.map(sides, function(side){
		return [selectors.dealId(side), selectors.dealText(side)];
	});
	var errors = [];
	return ids;
};

browser.visit("", function() {
	var sideDeals = getSideDealsIds(browser.document,browser);
	console.log(sideDeals.length);
});
