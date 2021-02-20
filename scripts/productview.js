import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    loadItem();
});

function loadItem() {
    const itemEl = document.getElementById("view-item");
    const selectedId = getSelectedItemId();

    const item = utils.getItemById(selectedId);

    document.title = item.name;

    const itemImg = utils.createItemImgEl(selectedId, item.name, utils.imgPath + item.image);
    const itemName = utils.createItemNameEl(selectedId, item.name);
    const itemPrice = utils.createItemPriceEl(selectedId, item.price);
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