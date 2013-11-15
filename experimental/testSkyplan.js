var Browser = require("zombie");
var _ = require('underscore');
var assert = require('assert');

// Load the page from localhost
var browser = new Browser();
//browser.site = 'http://beta-admin.zapakatel.cz/www/';
browser.site = 'http://stagy.skyplan.cz/';
browser.runScripts = false;
browser.loadCSS = false;
browser.debug = false;
browser.waitFor = 100;
browser.silent = true; //If true, supress all console.log output from scripts. You can still view it with window.console.output.


//custom
browser.debug = true;
browser.waitFor = 500;
browser.runScripts = false;




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

browser.visit("", function(document, browser) {
	

      assert.ok(browser.success);
      assert.equal(browser.text("title"), "Finanční kompenzace")
});
