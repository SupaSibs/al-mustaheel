import {patch} from "incremental-dom";

function render(fn: Function, node: HTMLElement) {
patch(node, fn())
}
