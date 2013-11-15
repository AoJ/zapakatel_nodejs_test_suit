var Browser = require("zombie");


// Load the page from localhost
browser = new Browser();
//browser.site = 'http://beta-admin.zapakatel.cz/www/';
browser.site = 'http://stage.skyplan.eu/';
browser.runScripts = false;
browser.loadCSS = false;
browser.debug = false;
browser.waitFor = 300;
browser.silent = true; //If true, supress all console.log output from scripts. You can still view it with window.console.output.


module.exports = browser;
