function stringToHTML(str) {
	let parser = new DOMParser();
	let doc = parser.parseFromString(str, 'text/html');
	return doc.body;
}

function render(fn) {
 let tempHTML = stringToHTML(fn())
 	diff(templateHTML, this.elem);
}
