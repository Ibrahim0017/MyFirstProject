  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  console.log(cartItems)
 
  const cartContain = document.getElementById("container");

  cartItems.map((item) => {
  const cards = document.createElement("div");
  cards.className = "itemCartDiv";
  cards.innerHTML = `
  <div class="imageDiv">
      <img src="${item.image}">
  </div>
  <div class="nameDiv">${item.details}</div>
  <div class="empty1"></div>
 <div class="group1">
  <div class="amountDiv"  id="Amount" >${item.price}</div>
  <div class="quantityDiv">
      <button  onclick="Decrease()" >-</button>
      <h3  id="number">1</h3>
      <button onclick="Increase(${item.id})" >+</button>
  </div>
  <div class="subtotalDiv"></div>
 </div>
      `;
      cartContain.appendChild(cards);
});
 

let value = parseInt(document.getElementById("number").innerHTML);
 
const amount = document.getElementById("Amount")
function Increase(cartProduct) {
    
    let myProduct = cartItems.find((el)=>el.id===cartProduct)
    
  let increaseQty = value++;
//   cartItems.forEach(item => {
    let newAmount
    cartItems.map((item)=>{
   
      if(item.id === myProduct.id){
        console.log(item)
        newAmount = increaseQty *  myProduct.price
        amount.innerText = newAmount
      }
  })

    
//   });
 

  document.getElementById("number").innerHTML = increaseQty;
}
function Decrease() {
  if (value < 2) {
    
  }else{
  let increaseQty = --value;

  document.getElementById("number").innerHTML = increaseQty;

  
  let newAmount = increaseQty * item.price

  amount.innerText = newAmount
}
}


console.log(Increase());


























// let cartItems = JSON.parse(localStorage.getItem("cartItems"));
// console.log(cartItems)

// const cartContain = document.getElementById("container");

// cartItems.forEach((item) => {
//   const cards = document.createElement("div");
//   cards.className = "itemCartDiv";
//   cards.innerHTML = `
//     <div class="imageDiv">
//       <img src="${item.image}">
//     </div>
//     <div class="nameDiv">${item.details}</div>
//     <div class="empty1"></div>
//     <div class="group1">
//       <div class="amountDiv" id="Amount">${item.price}</div>
//       <div class="quantityDiv">
//         <button onclick="Decrease(this, ${item.price}, ${item})">-</button>
//         <h3 id="number">1</h3>
//         <button onclick="Increase(this, ${item.price}, ${item})">+</button>
//       </div>
//       <div class="subtotalDiv"></div>
//     </div>
//   `;
//   cartContain.appendChild(cards);
// });

// function Increase(element, price, item) {
//   const quantityElement = element.parentNode.nextElementSibling;
//   let value = parseInt(quantityElement.innerHTML);
//   value++;
//   quantityElement.innerHTML = value;
//   const newAmount = value * price;
//   element.parentNode.parentNode.querySelector('.amountDiv').innerText = newAmount;
//   updateSubtotal(item, value);
// }

// function Decrease(element, price, item) {
//   const quantityElement = element.parentNode.nextElementSibling;
//   let value = parseInt(quantityElement.innerHTML);
//   if (value < 2) {
//     // handle minimum quantity or remove item
//   } else {
//     value--;
//     quantityElement.innerHTML = value;
//     const newAmount = value * price;
//     element.parentNode.parentNode.querySelector('.amountDiv').innerText = newAmount;
//     updateSubtotal(item, value);
//   }
// }

// function updateSubtotal(item, quantity) {
//   const subtotal = quantity * item.price;
//   // update subtotal display
// }















//function to increase quantity
// function increaseQty(productId){
//     cartItems.map((item)=>{
//         if(item.id === productId){
//             item.quantity = item.quantity + 1
//         }
//     })
//     updateCart()
// }
// // function to decrease quantity
// function decreaseQty(productId){
//     cartItems.map((item)=>{
//         if(item.id === productId && item.quantity > 1){
//             item.quantity = item.quantity - 1
//         }
//     })
//     updateCart()
// }




const burgerMenu = () =>{
    const nav = document.getElementById("navHolder")
    nav.classList.toggle("open")
}

document.getElementById("hamBurger").addEventListener("click", burgerMenu)
