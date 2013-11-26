var vows = require('vows');
var assert = require("assert");
var browser = require('../browser.config.js');
var selectors = require("../tools/selectors.js");

vows.describe('Dárkový kupón').addBatch({
	'Formulář':{
		topic:function () {
			browser.visit("/give-coupon", this.callback);

		},
		'Stránka načtena': function(browser) {
			assert.ok(browser.success);
		},
		'Nadpis h1': function(topic) {
			assert.isObject(selectors.getH1(topic));
		},
		'Jsou nějaké slevy v vedlejších slevách':function (topic) {
			assert.strictEqual (browser.queryAll(".standby-deal").length > 0, true);
		},
		'Má titulek Slevy každý den | Zapakatel.cz - Praha': function() {
			assert.equal(browser.text('title'), 'Slevy každý den | Zapakatel.cz - Praha');
		},
		'Prvky formuláře': function(topic){
			assert.isObject(topic.querySelector(":input[name=user_login]"));
			assert.isObject(topic.querySelector(":input[name=from]"));
			assert.isObject(topic.querySelector(":input[name=to]"));
			assert.isObject(topic.querySelector(":input[name=text]"));
			assert.isObject(topic.querySelector(":input[name=to_email]"));
			assert.isObject(topic.querySelector(":input[name=price]"));
			assert.isObject(topic.querySelector(":input[name=payment_method_id]"));
			assert.isObject(topic.querySelector(".payments :input[type=submit]"));
		},
		'Alespoň 1 sleva': function(topic) {
			assert.strictEqual(selectors.getStandbyDeals(topic).length > 0, true);
		},
		'Odeslání formuláře': function(topic){
			topic
				.fill("user_login", "test@allin1.cz")
				.fill("from", "Paja")
				.fill("to", "Jaja")
				.fill("price", 100)
				.pressButton(".payments :input[type=submit]", function(){

						assert.ok(browser.success);
						assert.equal(browser.location.pathname, "/coupon-payment");

				});
		}
	}
})
	.export(module);