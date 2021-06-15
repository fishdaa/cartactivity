import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    loadItem();
    utils.updateHeaderCartItems();
});

function loadItem() {
    const itemEl = document.getElementById("view-item");
    const selectedId = getSelectedItemId();

    const item = utils.getItemById(selectedId);

    document.title = item.name;

    const itemImg = utils.createItemImgEl(selectedId, item.name, utils.imgPath + item.image);
    const itemName = utils.createItemNameEl(selectedId, item.name);
    const itemPrice = utils.createItemPriceEl(selectedId, utils.numberWithCommas(item.price));
    const qtyTxtBox = utils.createQtyTxtBox(selectedId, 1);
    const btnAddCart = utils.createAddCartBtnEl(selectedId);


    itemEl.appendChild(itemImg);
    itemEl.appendChild(itemName);
    itemEl.appendChild(itemPrice);
    itemEl.appendChild(qtyTxtBox);
    itemEl.appendChild(btnAddCart);

    // adding event listeners
    btnAddCart.addEventListener("click", () => {
        utils.addItemtoCartEvent(
            "qty-text-" + selectedId
        );
    });
}

function getSelectedItemId(){
    const item = localStorage.getItem("selectedItem");
    return parseInt(item);
}

function displayDetails() {
    const item = getSelectedItemId();

    const model = document.getElementById("p-model");
    const disp = document.getElementById("p-disp");
    const body = document.getElementById("p-body");
    const cpu = document.getElementById("p-cpu");
    const mem = document.getElementById("p-mem");
    const cam = document.getElementById("p-cam");
    const bat = document.getElementById("p-bat");
    const comms = document.getElementById("p-comms");
    const misc = document.getElementById("p-misc");


}