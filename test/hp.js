var vows = require('vows');
var assert = require("assert");
var browser = require('../browser.config.js');
var selectors = require("../tools/selectors.js");

vows.describe('Úvodní stránka').addBatch({
	'HP':{
		topic:function () {
			browser.visit("/", this.callback);

		},
		'Stránka načtena': function(browser) {
			assert.ok(browser.success);
		},
		'Jsou nějaké slevy v vedlejších slevách':function (topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		},
		'Hlavní sleva':function (topic) {
			var h1 = browser.querySelector('h1.today-deal');
			assert.isNotNull(h1);
			assert.strictEqual (browser.queryAll(".standby-deal").length > 0, true);
		},
		'Má titulek Slevy každý den | Zapakatel.cz - Praha': function() {
			assert.equal(browser.text('title'), 'Slevy každý den | Zapakatel.cz - Praha');
		}
	}
})
	.export(module);