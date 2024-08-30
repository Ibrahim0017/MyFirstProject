const burgerMenu = () =>{
    const nav = document.getElementById("navHolder")
    nav.classList.toggle("open")
}

document.getElementById("hamBurger").addEventListener("click", burgerMenu)


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
  ];
  
  const cardContain = document.getElementById("card-Container");
  
  productsCard.map((item) => {
    const cards = document.createElement("div");
    cards.className = "card";
    cards.innerHTML = `
    <a href="./detail.html"> <img src="${item.image} "> </a>
  <button>Add to Cart</button>
  <div class="ProductDiv">${item.details}</div>
  <h3>${item.price}</h3>
      `;
      cardContain.appendChild(cards)
  });


  
const productsCard2 = [
  {
    ProductId: 5,
    image: "./Image/27-450x572.jpg",
    details: "Floor Lamp With Shade",
    price: "#300",
  },
  {
    ProductId: 6,
    image: "./Image/34-450x572.jpg",
    details: "Gardin Chair Armrests",
    price: "#1,009",
  },
  {
    ProductId: 7,
    image: "./Image/27-450x572.jpg",
    details: "Led Steel Floor Lamp",
    price: "#239",
  },
  {
    ProductId: 8,
    image: "./Image/31-450x572.jpg",
    details: "Wood Outdoor Chair",
    price: "#1,009",
  },
];

const cardContain2 = document.getElementById("card-Container2");

productsCard2.map((item) => {
  const cards = document.createElement("div");
  cards.className = "card";
  cards.innerHTML = `
  <a href="./detail.html"> <img src="${item.image} "> </a>
<button>Add to Cart</button>
<div class="ProductDiv">${item.details}</div>
<h3>${item.price}</h3>
    `;
    cardContain2.appendChild(cards)
});

let cartItems = [];

function addToCart(cartProduct) {
    let myProduct = productsCard.find((el)=>el.ProductId===cartProduct)
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