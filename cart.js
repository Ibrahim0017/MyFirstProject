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
  <div class="nameDiv">${item.detail}</div>
  <div class="empty1"></div>
 <div class="group1">
  <div class="amountDiv">${item.price}</div>
  <div class="quantityDiv">
      <button>-</button>
      <h3>${item.price}</h3>
      <button>+</button>
  </div>
  <div class="subtotalDiv"></div>
 </div>
      `;
      cartContain.appendChild(cards);
});
 
//function to increase quantity
function increaseQty(productId){
    cartItems.map((item)=>{
        if(item.id === productId){
            item.quantity = item.quantity + 1
        }
    })
    updateCart()
}
// function to decrease quantity
function decreaseQty(productId){
    cartItems.map((item)=>{
        if(item.id === productId && item.quantity > 1){
            item.quantity = item.quantity - 1
        }
    })
    updateCart()
}




const burgerMenu = () =>{
    const nav = document.getElementById("navHolder")
    nav.classList.toggle("open")
}

document.getElementById("hamBurger").addEventListener("click", burgerMenu)
