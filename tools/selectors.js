var _ = require('underscore');

var selectors = {};

selectors.getSideDealsIds = function(document) {

	var selectors = {
		dealText: function(sideDeal) {
			if(typeof sideDeal._childNodes !== 'undefined' && sideDeal._childNodes.length === 2)
				return sideDeal._childNodes[1].nodeValue;
			//console.log('error', sideDeal);
		},
		'dealId': function(sideDeal) {
			var pattern = new RegExp(/^.+id\-([0-9]+)\-{2}.*$/);
			result = sideDeal.href.match(pattern);
			if(result.length === 2) return result[1];
			//else errors.push(sideHref, result);
		}
	};

	var sides = document.querySelectorAll("#right-panel .right-panel-deal-image a.right-panel-deal-overlay");
	return _.map(sides, function(side){
		return [selectors.dealId(side), selectors.dealText(side)];
	});
};

selectors.getMenuList = function(document) {

	var selectors = {
		menuList: function(menuItem) {
			//console.log(menuItem._childNodes[0]);
			return menuItem._childNodes[0].nodeValue.replace(/[\s\W]{2,}/, '');
		}
	};

	var menuItems = document.querySelectorAll("#navigation .middle li a");
	return _.map(menuItems, function(item){
		return selectors.menuList(item);
	});
};

module.exports = selectors;
