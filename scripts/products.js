document.addEventListener("DOMContentLoaded", () => {
    renderItems();
    setInitialCart();
    setProducts();
});

const imgPath = "./images/";
const currency = "₱";

const items = [
    {
        id: 1,
        name: "Samsung Galaxy S21",
        image: "img1.jpg",
        price: currency + "47,990.00"

    },
    {
        id: 2,
        name: "Apple iPhone 12",
        image: "img2.jpg",
        price: currency + "49,990.00"
    },
    {
        id: 3,
        name: "Google Pixel 4A",
        image: "img3.jpg",
        price: currency + "16,500.00"
    }
]

const cart = [
    {
        itemId: 1,
        qty: 1
    },
]

function setInitialCart() {
    if(!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }   
}

function setProducts() {
    if(localStorage.getItem("item")) {
        const storedItems = localStorage.getItem("item");
        if(!storedItems.length === items.length) {
            localStorage.setItem("items", items);
        }
    }
    
}

function renderItems() {
    const prod = document.getElementById("products");
    console.log(123);

    for (let i=0; i<items.length; i++) {
        const itemdiv = document.createElement("div");
        itemdiv.setAttribute("id", "item-" + items[i].id);
        itemdiv.setAttribute("class", "prod-items");

        const itemImg = createItemImgEl(items[i].id, items[i].name, imgPath + items[i].image);
        const itemName = createItemNameEl(items[i].id, items[i].name);
        const itemPrice = createItemPriceEl(items[i].id, items[i].price);
        const qtyTxtBox = createQtyTxtBox(items[i].id, 1);
        const btnAddCart = createAddCartBtnEl(items[i].id);

        const qtydiv = createQtyContainer();
        qtydiv.appendChild(qtyTxtBox);

        prod.appendChild(itemdiv);
        itemdiv.appendChild(itemImg);
        itemdiv.appendChild(itemName);
        itemdiv.appendChild(itemPrice);
        itemdiv.appendChild(qtydiv);
        itemdiv.appendChild(btnAddCart);

        // adding event listeners
        btnAddCart.addEventListener("click", () => {
            addItemtoCartEvent(
                "qty-text-" + items[i].id
            );
        });
    }
}

function createItemImgEl(id, name, imgSrc) {
    const itemImg = document.createElement("img");
    itemImg.setAttribute("id", "item-img-" + id);
    itemImg.setAttribute("class", "item-img");
    itemImg.setAttribute("src", imgSrc);
    itemImg.setAttribute("alt", name);
    return itemImg;
}

function createItemNameEl(id, name) {
    const itemName = document.createElement("h3");
    itemName.setAttribute("id", "item-name-" + id);
    itemName.setAttribute("class", "item-name");
    itemName.innerText = name;
    return itemName;
}

function createItemPriceEl(id, price) {
    const itemPrice = document.createElement("h3");
    itemPrice.setAttribute("id", "item-price" + id);
    itemPrice.setAttribute("class", "item-price");
    itemPrice.innerText = price;
    return itemPrice;
}

function createAddCartBtnEl(id) {
    const addBtn = document.createElement("button");
    addBtn.setAttribute("class", "btn-add-item-" + id);
    addBtn.setAttribute("class", "btn-add-cart");
    addBtn.setAttribute("data-item-id", id);
    addBtn.innerText = "Add To Cart";
    return addBtn;
}

function createQtyContainer() {
    const qtydiv = document.createElement("div");
    qtydiv.setAttribute("class", "qty-div");
    const qtyText = document.createElement("p");
    qtyText.setAttribute("class", "qty-text")
    qtyText.innerText = "Qty";
    qtydiv.appendChild(qtyText);
    return qtydiv;
}


function createQtyTxtBox(itemId, itemQty) {
    const qtyTxtBox = document.createElement("input");
    qtyTxtBox.setAttribute("type", "text");
    qtyTxtBox.setAttribute("id", "qty-text-" + itemId);
    qtyTxtBox.setAttribute("data-qty-id", itemId);
    qtyTxtBox.innerText = itemQty;
    return qtyTxtBox;
}

function updateQty(itemId, qty) {
    const qtyEl = document.getElementById("qty-text-" + itemId);
    qtyEl.innerText(qty);
}

function addItemToCart(itemId, qty) {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);

    cart.push({
        itemId: parseInt(itemId),
        qty: qty
    });

    localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartItems() {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);
    return cart;
}

function updateCartItemQty(itemId, qty) {
    let cart = [];
    const cartstr = localStorage.getItem("cart");
    cart = JSON.parse(cartstr);

    for (let i=0; i<cart.length; i++) {
        console.log("123");
        return (cart[i].itemId === itemId) ? cart[i].qty = qty : false;
    }
}

function addItemtoCartEvent(qtyTxtBox) {
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

console.log(123);