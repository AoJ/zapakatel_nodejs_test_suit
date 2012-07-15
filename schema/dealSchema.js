
var dateTimePattern = /^(\d{2}|\d{4})(?:\-)?([0]{1}\d{1}|[1]{1}[0-2]{1})(?:\-)?([0-2]{1}\d{1}|[3]{1}[0-1]{1})(?:\s)?([0-1]{1}\d{1}|[2]{1}[0-3]{1})(?::)?([0-5]{1}\d{1})(?::)?([0-5]{1}\d{1})$/;

var datePattern = /^(\d{2}|\d{4})(\-)([0]{1}\d{1}|[1]{1}[0-2]{1})(\-)([0-2]{1}\d{1}|[3]{1}[0-1]{1})$/;

exports.deal = {
	"type":"object",
	"properties":{
		"deal_id":{
			"type": "string",
			"pattern": /^[0-9]{1,6}$/,
			"required": true
		},
		"deal_title":{
			"type":"string",
			"minLength":5,
			"maxLength":10,
			"required":true
		},
		"deal_subtitle":{
			"type":"string",
			"required": true

		},
		"deal_detail":{
			"type":"string",
			"required": true

		},
		"deal_short_detail":{
			"type":"string",
			"required": true

		},
		"deal_discount_rules":{
			"type":"string",
			"required": true

		},
		"deal_date_start":{
			"type":"string",
			"pattern": dateTimePattern,
			"required": true

		},
		"deal_date_end":{
			"type":"string",
			"pattern": dateTimePattern,
			"required": true

		},
		"deal_voucher_start":{
			"type":"string",
			"pattern": datePattern,
			"required": true

		},
		"deal_voucher_end":{
			"type":"string",
			"pattern": datePattern,
			"required": true

		},
		"deal_buyers_min":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_buyers_max":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_buyers_start":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_max_per_user":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_active":{
			"type":"string",
			"pattern":/^[10]{1}$/,
			"required": true

		},
		"deal_buyers_confirmed_count":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_buyers_count":{
			"type":"string",
			"pattern":/^[0-9]{1,6}$/,
			"required": true
		},
		"deal_goal_reached":{
			"type":"string",
			"pattern":/^[10]{1}$/,
			"required": true

		}
	}
};