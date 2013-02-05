// {{url text}}
Handlebars.registerHelper('url', function(str) {
	return encodeURIComponent(str);
});
