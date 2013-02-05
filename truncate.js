// {{truncate text 42}}
Handlebars.registerHelper('truncate', function(str, to) {
	return str.length > to ? str.slice(0, to) + '...' : str;
});
