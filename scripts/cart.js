import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

let cart = [];

function renderCart() {
    const cartdiv = document.getElementById("cart");
    
}

function createDiv(id, className) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", className );
    return div;
} 