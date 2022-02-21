

let support = (function () {
	if (!window.DOMParser) return false;
	let parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();


 function stringToHTML(str) {

	// If DOMParser is supported, use it
	if (support) {
		let parser = new DOMParser();
		let doc = parser.parseFromString(str, 'text/html');
		return doc.body;
	}

	// Otherwise, fallback to old-school method
	let dom = document.createElement('div');
	dom.innerHTML = str;
	return dom
};


function createDOMMAP(element) {
	return Array.prototype.map.call(element.childNodes, (function (node) {
		var details = {
			content: node.childNodes && node.childNodes.length > 0 ? null : node.textContent,
			atts: node.nodeType !== 1 ? [] : getAttributes(node.attributes),
			type: '',
			node: node
		};
		return details;
	}));
};

