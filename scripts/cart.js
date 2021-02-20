document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});

let cart = [];

function loadCart() {
    const storedCart = localStorage.getItem("cart");
    cart = JSON.parse(storedCart);
    console.log(cart);

}

function renderCart() {
    const cartdiv = document.getElementById("cart");
    
}

function createDiv(id, className) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", className );
    return div;
} 