var vows = require('vows');
var preparedTests = require('../tools/preparedTests.js');

var options = {
	minDeals: true,
	sideDeals: true,
	h1: true,
	titles: true
};

vows.describe('Kategorie')

//1000 Praha
.addBatch({'Praha Cestování': preparedTests.categoryCheck(options, 1000, 'cestovani', 'Cestování')})

.export(module);