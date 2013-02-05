// {{#join items separator=" and "}}&quot;{{this}}&quot;{{/join}}
Handlebars.registerHelper('join', function(context, options) {
	var fn = options.fn, inverse = options.inverse;
	var ret = [];
	if (context && context.length) {
		for (var i = 0, l = context.length; i < l; ++i) {
			ret[i] = fn(context[i]);
		}
		ret = ret.join(options.hash.separator);
	}
	else {
		ret = inverse(this);
	}
	return ret;
});
