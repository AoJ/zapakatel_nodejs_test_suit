var browser = require('../browser.config.js');
var _ = require('underscore');
var assert = require('assert');

browser.debug = true;
browser.waitFor = 500;
browser.runScripts = false	;




var newsletterRegister = function(document, browser) {

	//var newsHref = document.querySelectorAll(")[0];
	//console.log(newsHref);

	

	browser

			.fill("newsletter-email", "hegenbart@allin1.cz")
			.pressButton("#newsletter-send:input[type=submit]", function() {

		      // Form submitted, new page loaded.
		      assert.ok(browser.success);

		      setTimeout(function(){


		      console.log(document.querySelector(".newsletter form")._childNodes[0].__nodeValue);
		      assert.equal(document.querySelectorAll(".newsletter h3")._childNodes[0].nodeValue, "V pořádku jste byli přihlášení k odběru newsletterů");
 }, 1000);
    		});
		
};

browser.visit("", function() {
	var sideDeals = newsletterRegister(browser.document,browser);
});
