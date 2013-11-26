var config = require('../config.js');
var vows = require('vows');
var browser = require('../browser.config.js');
var assert = require("assert");
var events = require("events");
var selectors = require("../tools/selectors.js");

vows.describe('Test chybových stránek')
	.addBatch({
		'404': {
			topic: function() {
				browser.visit('404', this.callback);
			},
			'Vrací kód 404': function(topic) {
				assert.strictEqual(topic.statusCode, 404);
			},
			'Stránka načtena': function(topic) {
				assert.isFalse(topic.success);
			},
			'Nadpis h1': function(topic) {
				assert.isObject(selectors.getH1(topic));
			},
			'Alespoň 1 sleva': function(topic) {
				assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
			}
		}
	})
	.export(module);