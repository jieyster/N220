const menuUlRef = document.querySelector("#menu")
const cartTableRef = document.querySelector("#cart");
const noItemsRef = document.querySelector("#no-items");



const menu = [
    { name: "Hamburger", price: "$2.99" },
    { name: "Cheeseburger", price: "$3.99" },
    { name: "Cheese Pizza", price: "$3.99" },
    { name: "Pepperoni Pizza", price: "$4.99" },
    { name: "Sausage Pizza", price: "$4.99" },
    { name: "Caesar Salad", price: "$3.99" },
    { name: "Fries", price: "$1.99" },
    { name: "Onion Rings", price: "$2.49" },
    
];

console.log("menu", menu);

const cart = [];

console.log("cart", cart);
console.log("cart length", cart.length);



function showCart() {
    cartTableRef.innerHTML = "";



    for (let i = 0; i < cart.length; i++) {
        cartTableRef.innerHTML += "<tr>" + "<td>" + cart[i] +"</td>" +"<td>" + "<textarea></textarea>" +"</td>" + "<td>" + "<button id='remove'>-</button>" + "</td>" + "</tr>";
    }
    


}


function addItemToCart(e) {
    cart.push(e.target.dataset.name);
    showCart();
}

for (let i = 0; i < menu.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = menu[i].name + " " + menu[i].price + " ";

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    
    newBtn.dataset.name = menu[i].name + "<td>"+menu[i].price+ "</td>";
    newBtn.onclick = addItemToCart;
    newLi.appendChild(newBtn);

    menuUlRef.appendChild(newLi);


}

const removeBtnRef = document.querySelector("#remove");

function removeItemFromCart(e) {
    cart.pop();

    showCart();

    if (cart.length === 0) {
        document.getElementById("no-ticket").style.display = "block";
        
        } else {
        document.getElementById("no-ticket").style.display = "none";
    }
}

removeBtnRef.oninput = removeItemFromCart

//