const Order = () => {

    Swal.fire({
        title: "Sucessful",
        text: "Thank for Shopping",
        icon: "success",
        confirmButtonText: "Home"
      }).then(()=>{
        window.location.href = "index.html"
      })
}
        
const burgerMenu = () =>{
  const nav = document.getElementById("navHolder")
  nav.classList.toggle("open")
}

document.getElementById("hamBurger").addEventListener("click", burgerMenu)