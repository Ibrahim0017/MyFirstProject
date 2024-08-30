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
  cardContain.appendChild(cards);
});

const burgerMenu = () => {
  const nav = document.getElementById("navHolder");
  nav.classList.toggle("open");
};

document.getElementById("hamBurger").addEventListener("click", burgerMenu);

const amount = document.getElementById("Amount")

let value = parseInt(document.getElementById("number").innerHTML);

function Increase() {
  let increaseQty = value++;

  let newAmount = increaseQty * 1500

  amount.innerText = newAmount

  document.getElementById("number").innerHTML = increaseQty;
}
function Decrease() {
  if (value < 2) {
    
  }else{
  let increaseQty = --value;

  document.getElementById("number").innerHTML = increaseQty;

  
  let newAmount = increaseQty * 1500

  amount.innerText = newAmount
}
}


console.log(Increase());

// const details = [
//     {
//         id: 1,
//         text: "Frame is benchmade",
//     },
// ];

// const list = document.getElementsByTagName("ul");

// details.map((item)=>{
//     const lists = document.createElement("ul");
//     lists.className = "li";
//     lists.innerHTML = `
//     <li>${item.text}</li>
//     `;
//     list.appendChild(li)
// })
