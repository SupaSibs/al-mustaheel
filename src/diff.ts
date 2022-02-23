import {render as rend} from "jsx-to-idom";
import {patch} from "incremental-dom";

function render(fn: function, node) {
patch(node, () => rend(fn()))
}
