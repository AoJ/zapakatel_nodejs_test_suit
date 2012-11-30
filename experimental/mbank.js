var browser = require('../browser.config.js');
var _ = require('underscore');
var assert = require('assert');

browser.site = 'http://www.hvezdakampane.cz/';
browser.debug = true;
browser.waitFor = 1500;
browser.runScripts = true	;
browser.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.79 Safari/537.1';




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

browser.visit("people/?sorder=best", function(e, browser, status) {
	//browser.clickLink('a[data-id="158"]', function() {
		console.log(browser.cookies().dump());
		var field = browser.document.querySelector('a[data-id=158]');
		field.href = '/people/?sorder=best&peo-page=2&do=addVoteAjax&id=158&sorder=best';
		//console.log(browser.document.allHeaders);
		//browser.headers.X-Requested-With = 'XMLHttpRequest';
		browser.clickLink('a[data-id=158]', function(e, browser,status){
			console.log(browser.document.allHeaders);
		});
		console.log(field.href);
		//browser.visit('http://www.hvezdakampane.cz/people/?sorder=best&peo-page=2&do=addVoteAjax&id=158&sorder=best', function() {})
		//console.log(1);
	//});
});
