function stringToHTML(str) {
	let parser = new DOMParser();
	let doc = parser.parseFromString(str, 'text/html');
	return doc.body;
}

function render(fn) {
 let tempHTML = stringToHTML(fn())
 	diff(templateHTML, this.elem);
}


function diff() {
let domNodes = Array.prototype.slice.call(elem.childNodes);
let templateNodes = Array.prototype.slice.call(template.childNodes);	
}
