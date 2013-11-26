var config = require('../config.js');
var vows = require('vows');
var browser = require('../browser.config.js');
var assert = require("assert");
var events = require("events");
var selectors = require("../tools/selectors.js");

var testSuite = vows.describe('Test kategorií');

var city = config.cities[0];

config.categories.forEach(function(category){
	var batch = {};
	batch['Kategorie: ' + category.name] = {
		topic: function() {
			browser.visit(city.lang + '/' + city.uri + '/kategorie/' + category.url, this.callback);
		},
		'Stránka načtena': function(topic) {
			assert.ok(topic.success);
		},
		'Nadpis h1': function(topic) {
			assert.isObject(selectors.getH1(topic));
		},
		'Alespoň 1 sleva': function(topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		}
	};
	testSuite.addBatch(batch);
});

testSuite.addBatch({
	'Doprodej': {
		topic: function() {
			browser.visit('/last-minute', this.callback);
		},
		'Stránka načtena': function(topic) {
			assert.ok(topic.success);
		},
		'Nadpis h1': function(topic) {
			assert.isObject(selectors.getH1(topic));
		},
		'Alespoň 1 sleva': function(topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		}
	}
});

testSuite.addBatch({
	'Vánoce': {
		topic: function() {
			browser.visit('/vanoce', this.callback);
		},
		'Stránka načtena': function(topic) {
			assert.ok(topic.success);
		},
		'Nadpis h1': function(topic) {
			assert.isObject(selectors.getH1(topic));
		},
		'Alespoň 1 sleva': function(topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		}
	}
});

testSuite.export(module);