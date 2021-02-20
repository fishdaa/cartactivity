import { items } from "./product-db.mjs";
import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    renderItems();
    setInitialCart();
    setProducts();
});

const imgPath = "./images/";
const cart = [];

function setInitialCart() {
    if(!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }   
}

function setProducts() {
    localStorage.setItem("items", JSON.stringify(items));
}

function renderItems() {
    const prod = document.getElementById("products");

    for (let i=0; i<items.length; i++) {
        const itemdiv = document.createElement("div");
        itemdiv.setAttribute("id", "item-" + items[i].id);
        itemdiv.setAttribute("class", "prod-items");

        const itemImg = utils.createItemImgEl(items[i].id, items[i].name, imgPath + items[i].image);
        const itemName = utils.createItemNameEl(items[i].id, items[i].name);
        const itemPrice = utils.createItemPriceEl(items[i].id, items[i].price);
        const qtyTxtBox = utils.createQtyTxtBox(items[i].id, 1);
        const btnAddCart = utils.createAddCartBtnEl(items[i].id);

        const qtydiv = utils.createQtyContainer();
        qtydiv.appendChild(qtyTxtBox);

        prod.appendChild(itemdiv);
        itemdiv.appendChild(itemImg);
        itemdiv.appendChild(itemName);
        itemdiv.appendChild(itemPrice);
        itemdiv.appendChild(qtydiv);
        itemdiv.appendChild(btnAddCart);

        // adding event listeners
        btnAddCart.addEventListener("click", () => {
            utils.addItemtoCartEvent(
                "qty-text-" + items[i].id
            );
        });
    }
}
