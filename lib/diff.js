"use strict";
exports.__esModule = true;
var incremental_dom_1 = require("incremental-dom");
function render(fn, node) {
    (0, incremental_dom_1.patch)(node, fn());
}
