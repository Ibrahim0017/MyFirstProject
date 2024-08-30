const productsCard = [
  {
    ProductId: 1,
    image: "./Image/27-450x572.jpg",
    details: "Floor Lamp With Shade",
    price: "#300",
  },
  {
    ProductId: 2,
    image: "./Image/34-450x572.jpg",
    details: "Gardin Chair Armrests",
    price: "#1,009",
  },
  {
    ProductId: 3,
    image: "./Image/27-450x572.jpg",
    details: "Led Steel Floor Lamp",
    price: "#239",
  },
  {
    ProductId: 4,
    image: "./Image/31-450x572.jpg",
    details: "Wood Outdoor Chair",
    price: "#1,009",
  },
  {
    ProductId: 5,
    image: "./Image/34-450x572.jpg",
    details: "Gardin Chair Armrests",
    price: "#1,009",
  },
  {
    ProductId: 6,
    image: "./Image/27-450x572.jpg",
    details: "Led Steel Floor Lamp",
    price: "#239",
  },
  {
    ProductId: 7,
    image: "./Image/31-450x572.jpg",
    details: "Wood Outdoor Chair",
    price: "#1,009",
  },
  {
    ProductId: 8,
    image: "./Image/31-450x572.jpg",
    details: "Wood Outdoor Chair",
    price: "#1,009",
  },
  {
    ProductId: 9,
    image: "./Image/31-450x572.jpg",
    details: "Wood Outdoor Chair",
    price: "#1,009",
  },
];

const cardContain = document.getElementById("card-Container");

productsCard.map((item) => {
  const cards = document.createElement("div");
  cards.className = "card";
  cards.innerHTML = `
    <a href="./detail.html"> <img src="${item.image} "> </a>
  <button onclick="addToCart(${item.ProductId})">Add to Cart</button>
<a href="./detail.html">  <div class="ProductDiv">${item.details}</div> </a>
  <h3>${item.price}</h3>
      `;
  cardContain.appendChild(cards);
});

const burgerMenu = () => {
  const nav = document.getElementById("navHolder");
  nav.classList.toggle("open");
};

document.getElementById("hamBurger").addEventListener("click", burgerMenu);

let cartItems = [];

function addToCart(cartProduct) {
    let myProduct = productsCard.find((el)=>el.ProductId===cartProduct)
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const product = {
    id: myProduct.ProductId,
    price: myProduct.price,
    name: myProduct.details,
    image: myProduct.image,
    quantity: 1,
  };


  let itemExists = false;

  cartItems.forEach((item) => {
    if (item.id === myProduct.ProductId) {
      item.quantity += 1; 
      itemExists = true;
    }
  });
  console.log(product)

  if (!itemExists) {
    cartItems.push(product);
  }
  console.log(cartItems)
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCart();

  
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.textContent = "";

  let total = 0;
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  cartItems.map((item) => {
    const list = document.createElement("li");
    list.innerHTML = `
        Product name: ${item.name} - Quantity:
        <button onClick="decreaseQty(${item.id})"> - </button>${item.quantity}
        <button onClick="increaseQty(${item.id})"> + </button> - Price ${
      item.price * item.quantity
    }
        `;
    cartList.appendChild(list);
    total += item.price * item.quantity;

    return list;
  });

  document.getElementById("cartTotal").textContent = total.toFixed(2);
}


// function getCart() {
//   let display = JSON.parse(localStorage.getItem("productHolder")) || []
//         return display
//     }
//     function saveCart(display) {
//         localStorage.setItem("productHolder", JSON.stringify(display))
//     }
//     function cartCount() {
//         const countNumber = getCart()
//         const totalQuantity = countNumber.reduce((acc, item) => acc + item.quantity, 0)
//         document.getElementById("cartCount").textContent = totalQuantity
//         console.log(totalQuantity, "quantity")
//     }
//     document.addEventListener("DOMContentLoaded", cartCount)

//     function deleteProduct(productId) {
// let display = getCart()
// // let display = JSON.parse(localStorage.getItem("productHolder")) || []
// display = display.filter(item => item.id  !== productId)
// console.log(display)
// saveCart(display)
// displayCart()
//     }