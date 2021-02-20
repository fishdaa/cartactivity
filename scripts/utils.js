export const currency = "₱";

export function createItemImgEl(id, name, imgSrc) {
    const itemImg = document.createElement("img");
    itemImg.setAttribute("id", "item-img-" + id);
    itemImg.setAttribute("class", "item-img");
    itemImg.setAttribute("src", imgSrc);
    itemImg.setAttribute("alt", name);
    return itemImg;
}

export function createAnchorEl(id) {
    const link = document.createElement("a");
    link.setAttribute("id", "item-link");
    link.
}

export function createItemNameEl(id, name) {
    const itemName = document.createElement("h3");
    itemName.setAttribute("id", "item-name-" + id);
    itemName.setAttribute("class", "item-name");
    itemName.innerText = name;
    return itemName;
}

export function createItemPriceEl(id, price) {
    const itemPrice = document.createElement("h3");
    itemPrice.setAttribute("id", "item-price" + id);
    itemPrice.setAttribute("class", "item-price");
    itemPrice.innerText = currency + price;
    return itemPrice;
}

export function createAddCartBtnEl(id) {
    const addBtn = document.createElement("button");
    addBtn.setAttribute("class", "btn-add-item-" + id);
    addBtn.setAttribute("class", "btn-add-cart");
    addBtn.setAttribute("data-item-id", id);
    addBtn.innerText = "Add To Cart";
    return addBtn;
}

export function createQtyContainer() {
    const qtydiv = document.createElement("div");
    qtydiv.setAttribute("class", "qty-div");
    const qtyText = document.createElement("p");
    qtyText.setAttribute("class", "qty-text")
    qtyText.innerText = "Qty";
    qtydiv.appendChild(qtyText);
    return qtydiv;
}


export function createQtyTxtBox(itemId, itemQty) {
    const qtyTxtBox = document.createElement("input");
    qtyTxtBox.setAttribute("type", "text");
    qtyTxtBox.setAttribute("id", "qty-text-" + itemId);
    qtyTxtBox.setAttribute("data-qty-id", itemId);
    qtyTxtBox.innerText = itemQty;
    return qtyTxtBox;
}

export function addItemToCart(itemId, qty) {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);

    cart.push({
        itemId: parseInt(itemId),
        qty: qty
    });

    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartItems() {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);
    return cart;
}

export function addItemtoCartEvent(qtyTxtBox) {
    const qtyEl = document.getElementById(qtyTxtBox);
    const qty = parseInt(qtyEl.value);
    const qtyId = parseInt(qtyEl.getAttribute("data-qty-id"));

    let cart = getCartItems();
    console.log(cart);

    let updatedCart = false

    for (let i=0; i<cart.length; i++){
        if(cart[i].itemId === qtyId){
            cart[i].qty = qty;
            localStorage.setItem("cart", JSON.stringify(cart));
            updatedCart = true;
            alert("updated cart!");
        }  
    }
    if(updatedCart === false){
        addItemToCart(qtyId, qty);
        alert("added item to cart");
    }
}