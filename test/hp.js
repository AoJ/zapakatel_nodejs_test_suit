var vows = require('vows');
var assert = require("assert");
var browser = require('../browser.config.js');

vows.describe('Úvodní stránka').addBatch({
	'HP':{
		topic:function () {
			browser.visit("/", this.callback);

		},

		'Stránka načtena': function(browser) {
			assert.ok(browser.success);
		},


		'Jsou nějaké slevy v vedlejších slevách':function (topic) {
			assert.strictEqual (browser.queryAll(".right-panel-deal-image").length > 0, true);
		},


		'Má titulek Slevy každý den | Zapakatel.cz - Praha': function() {
			assert.equal(browser.text('title'), 'Slevy každý den | Zapakatel.cz - Praha');
		}


	}
})
.export(module);