import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
    loadItem();
    utils.updateHeaderCartItems();
    displayDetails();
    qtyPriceEvent();
});

function loadItem() {
    const itemEl = document.getElementById("view-item");
    const selectedId = utils.getSelectedItemId();

    const item = utils.getItemById(selectedId);

    document.title = item.name;

    const itemImg = utils.createItemImgEl(selectedId, item.name, utils.imgPath + item.image);
    const itemName = utils.createItemNameEl(selectedId, item.name);
    const itemPrice = utils.createItemPriceEl(selectedId, utils.numberWithCommas(item.price));
    const qtyTxtBox = utils.createQtyTxtBox(1);
    const btnAddCart = utils.createAddCartBtnEl(selectedId);


    itemEl.appendChild(itemImg);
    itemEl.appendChild(itemName);
    itemEl.appendChild(itemPrice);
    itemEl.appendChild(qtyTxtBox);
    itemEl.appendChild(btnAddCart);

    // adding event listeners
    btnAddCart.addEventListener("click", utils.addItemtoCartEvent);
}

function displayDetails() {
    const itemId = utils.getSelectedItemId();
    const item = utils.getItemById(itemId);

    const model = document.getElementById("p-model");
    const disp = document.getElementById("p-disp");
    const body = document.getElementById("p-body");
    const cpu = document.getElementById("p-cpu");
    const mem = document.getElementById("p-mem");
    const cam = document.getElementById("p-cam");
    const bat = document.getElementById("p-bat");
    const os = document.getElementById("p-os");
    const comms = document.getElementById("p-comms");
    const misc = document.getElementById("p-misc");

    model.innerText = item.name;
    disp.innerText = item.display;
    body.innerText = `${item.body.dimensions} 
                      ${item.body.weight}
                    `;
    cpu.innerText = item.cpu;
    mem.innerText = item.memory;
    cam.innerText = `Main: ${item.camera.main.setup}
                        ${Object.keys(item.camera.main.details).map((key) => {
                            return `${item.camera.main.details[key]}`           
                        }).join(", ")}
                    Selfie: ${item.camera.selfie.setup}
                        ${Object.keys(item.camera.selfie.details).map((key) => {
                            return `${item.camera.selfie.details[key]}`           
                        }).join(", ")}
                    `;
    bat.innerText = item.battery;
    os.innerText = item.os;
    comms.innerText = `Network: ${item.comms.network}
                        WLAN: ${item.comms.wlan}
                        Bluetooth: ${item.comms.bluetooth}
                        GPS: ${item.comms.gps}
                        NFC: ${item.comms.nfc}
                        USB: ${item.comms.usb}
                    `;
    misc.innerText = `${Object.keys(item.misc).map((key) => {
                            return `${item.misc[key]}`           
                        }).join(", ")}
                    `;
}

function qtyPriceEvent() {
    const qty = document.getElementById("view-item");
    const qtyItem = document.getElementById("qty-item");
    const qtyPrice = createQtyPriceEl();
    qty.appendChild(qtyPrice);
    computeTotalPrice();
    qtyItem.oninput = computeTotalPrice;
}

function computeTotalPrice() {
    const itemId = utils.getSelectedItemId();
    const item = utils.getItemById(itemId);
    const isEmpty = str => !str.trim().length;

    const qty = document.getElementById("qty-item");
    const numPrice = Number(Math.round(parseFloat(item.price)+'e2')+'e-2') * qty.value;
    let totalPrice = utils.numberWithCommas((numPrice).toFixed(2));

    if(isEmpty(qty.value)) {
        totalPrice = 0.0.toFixed(2);
    }

    const qtyPrice = document.getElementById("qty-price");
    qtyPrice.innerText = `Total Price: ${utils.currency}${utils.numberWithCommas(totalPrice)}`;
}

function createQtyPriceEl() {
    const el = document.createElement("p");
    el.setAttribute("id", "qty-price");
    return el;
}