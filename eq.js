// {{#eq a b}}foo{{else}}bar{{/eq}}
Handlebars.registerHelper('eq', function(a, b, options) {
	return a == b ?
		options.fn(this) :
		options.inverse(this);
});
