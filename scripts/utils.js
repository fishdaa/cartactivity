export const currency = "₱";
export const imgPath = "./images/";

export function createItemImgEl(id, name, imgSrc) {
    const itemImg = document.createElement("img");
    itemImg.setAttribute("id", "item-img-" + id);
    itemImg.setAttribute("class", "item-img");
    itemImg.setAttribute("src", imgSrc);
    itemImg.setAttribute("alt", name);
    return itemImg;
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

export function createQtyTxtBox(itemQty) {
    const lblQty = document.createElement("label");
    lblQty.setAttribute("class", "qty-text");
    lblQty.setAttribute("for", "qty");
    lblQty.textContent = "Qty: ";

    const qtyTxtBox = document.createElement("input");
    qtyTxtBox.setAttribute("type", "text");
    qtyTxtBox.setAttribute("id", "qty-item");
    qtyTxtBox.setAttribute("name", "qty");
    qtyTxtBox.value = itemQty;

    lblQty.appendChild(qtyTxtBox);
    return lblQty;
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

export function getSelectedItemId(){
    const item = localStorage.getItem("selectedItem");
    return parseInt(item);
}

export function getCartItems() {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);
    return cart;
}

export function addItemtoCartEvent() {
    const qtyEl = document.getElementById("qty-item");
    const qty = parseInt(qtyEl.value);
    const itemId = getSelectedItemId();

    let cart = getCartItems();
    let updatedCart = false

    for (let i=0; i<cart.length; i++){
        if(cart[i].itemId === itemId){
            updatedCart = true;
            cart[i].qty += qty;
            localStorage.setItem("cart", JSON.stringify(cart));
            if(confirm("updated cart\ndo you want to checkout now?")) {
                openPage("/cart.html");
            } else location.reload();
        }  
    }
    if(updatedCart === false){
        addItemToCart(itemId, qty);
        if(confirm("added item to cart\ndo you want to checkout now?")) {
            openPage("/cart.html");
        } else location.reload();
    }
}

export function nextProduct(currentId) {
    const items = localStorage.getItem("items");
    items = JSON.parse(items);
}

export function createNextProductEl() {
    const el = document.createElement("button");
    el.setAttribute("id", "next-item");
    el.innerHTML("Next Item");
    return el;
}

export function setsSelectedItem(id) {
    localStorage.setItem("selectedItem", id);
}

export function createAnchorEl(id){
    const el = document.createElement("a");
    el.setAttribute("id", "item-link-" + id);
    el.setAttribute("class", "item-link");
    return el;
}

export function getItemById(id) {
    let items = localStorage.getItem("items");
    items = JSON.parse(items);

    for (let i=0; i<items.length; i++) {
        if(items[i].id === id){
            return items[i];
        }
    }
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function updateHeaderCartItems() {
    const el = document.getElementById("header-cart");
    const cart = getCartItems();

    const sub = document.createElement("sub");
    sub.innerHTML = ` (${cart.length})`;
    el.appendChild(sub);
}

export function getLink() {
    const currentPage = window.location.href;
    const slashLocation = currentPage.lastIndexOf("/");
    const splitLink = currentPage.split(
        currentPage.slice(slashLocation, currentPage.length), 
        currentPage.length
    )
    return splitLink[0];
}

export function openPage(page) {
    const splitLink = getLink();
    open(splitLink + page, "_parent");
}