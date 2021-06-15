import { items } from "./product-db.mjs";
import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    renderItems();
    setInitialCart();
    setProducts();
    utils.updateHeaderCartItems();
});
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

        const itemImg = utils.createItemImgEl(
            items[i].id, 
            items[i].name, 
            utils.imgPath + items[i].image
        );
        const itemName = utils.createItemNameEl(
            items[i].id, 
            items[i].name
        );
        const itemPrice = utils.createItemPriceEl(
            items[i].id, 
            utils.numberWithCommas(items[i].price)
        );
        const addProdLink = utils.createAnchorEl(items[i].id);

        addProdLink.appendChild(itemName);

        const link = replaceLink("productview.html");
        addProdLink.setAttribute("href", link);

        prod.appendChild(itemdiv);
        itemdiv.appendChild(itemImg);
        itemdiv.appendChild(addProdLink);
        itemdiv.appendChild(itemPrice);

        // adding event listeners
        addProdLink.addEventListener("click", () => {
            utils.setsSelectedItem(items[i].id);
        });
    }
}


function isindex() {
    const link = window.location.href
    if (link.includes("index.html")) {
        return true;
    }
    return false;
}

function replaceLink(page) {
    const index = isindex();
    const link = utils.getLink();

    if (index) {
        return `${link}/${page}`;
    } else {
        return `${window.location.href}${page}`;
    }
    
}