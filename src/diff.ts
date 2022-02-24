import {patch} from "incremental-dom";

function render(fn: function, node; HTMLElement) {
patch(node, fn())
}
