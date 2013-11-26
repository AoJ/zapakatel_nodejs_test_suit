var config = require('../config.js');
var vows = require('vows');
var browser = require('../browser.config.js');
var assert = require("assert");
var events = require("events");
var selectors = require("../tools/selectors.js");

var testSuite = vows.describe('Test hlavních stránek měst');

config.cities.forEach(function(city){
	var batch = {};
	batch['Město: ' + city.name] = {
		topic: function() {
			browser.visit(city.lang + '/' + city.uri, this.callback);
		},
		'Stránka načtena': function(topic) {
			assert.ok(topic.success);
		},
		'Nadpis h1': function(topic) {
			assert.isObject(selectors.getH1(topic));
		},
		'Kontrola tagu title': function(topic){
			var prefix = ( city.lang == 'cs' ? 'Slevy každý den | Zapakatel.cz - ' : 'Zľavy každý deň | Zabagatel.sk - ' );
			var expectedTitle = prefix + city.name;
			assert.strictEqual(expectedTitle, topic.text('title'));
		},
		'Alespoň 1 sleva': function(topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		}
	};
	testSuite.addBatch(batch);
});

testSuite.export(module);