var vows = require('vows');
var assert = require("assert");
var browser = require('../browser.skyplan.config.js');

vows.describe('stage.skyplan.eu').addBatch({
	'HP':{
		topic:function () {
			browser.visit("/", this.callback);

		},

		'Stránka načtena': function(browser) {
			assert.ok(browser.success);
		},


		'Má titulek "Finanční kompenzace až 600 Euro | Skyplan.eu"': function() {
			assert.equal(browser.text('title'), 'Finanční kompenzace až 600 Euro | Skyplan.eu');
		},

		'obsahuje správné odkazy v menu': function() {
			var menus = browser.queryAll(".menu-links a");
			assert.strictEqual (menus[0].href, 'http://stage.skyplan.eu/');
			assert.strictEqual (menus[1].href, 'http://stage.skyplan.eu/how-it-works');
			assert.strictEqual (menus[2].href, 'http://stage.skyplan.eu/for-bussines');
			assert.strictEqual (menus[3].href, 'http://stage.skyplan.eu/about');
			assert.strictEqual (menus[4].href, 'http://stage.skyplan.eu/contact');
			assert.strictEqual (menus[5].href, 'http://stage.skyplan.eu/skyplan-account/my-account');
		}


	}
})
.export(module);


