import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    renderCartItems();
});

let cart = [];

function renderCartItems() {
    let cart = utils.getCartItems();
    const cartdiv = document.getElementById("cart");
    let prodTotal = 0.00;

    for (let i=0; i<cart.length; i++) {
        const item = utils.getItemById(cart[i].itemId);
        const row = createSpanRow(item.id, item.name, item.price, cart[i].qty);
        cartdiv.appendChild(row.name);
        cartdiv.appendChild(row.price);
        cartdiv.appendChild(row.qty);
        cartdiv.appendChild(row.subtotal); 
        prodTotal += row.subtotalF;  
        cartdiv.appendChild(row.remove);
    }

    const strprice = utils.currency + utils.numberWithCommas(prodTotal.toFixed(2));
    document.getElementById("cart-total-price")
        .innerHTML = strprice;
}

function createSpan(text) {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}

function createSpanRow(id, name, price, qty) {
    const nameEl = createSpan(name);
    const priceEl = createSpan(utils.currency + utils.numberWithCommas(price));
    const qtyEl = createSpan(qty);
    const delbtn = createSpan("").appendChild(addDelBtn());

    const numPrice = Number(Math.round(parseFloat(price)+'e2')+'e-2') * qty;
    const subt = utils.numberWithCommas((numPrice).toFixed(2));
    const subtEl = createSpan(utils.currency + subt);

    delbtn.addEventListener("click", () => {
        removeOrderItem(id);
    })

    return {
        name: nameEl,
        price: priceEl,
        qty: qtyEl,
        subtotal: subtEl,
        subtotalF: numPrice,
        remove: delbtn
    }
}

function removeOrderItem(id) {
    let cart = utils.getCartItems();
    for (let i=0; i<cart.length; i++) {
        if (cart[i].itemId === id) {
            if (confirm("remove order from list?")) {
                cart.splice(i, 1);
            }
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function addDelBtn() {
    const btn = document.createElement("button");
    btn.innerText = "Remove";
    return btn;
}

function print() {
    window.print();
}
document.getElementById("cart-print").onclick = print;