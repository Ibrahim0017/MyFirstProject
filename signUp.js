const SignUp = (event) => {
    event.preventDefault()
    const SignUpemail = document.getElementById("email").value;
    const SignUPname = document.getElementById("name").value;
    const SignUppassword = document.getElementById("password").value;

    const userId = {SignUpemail, SignUPname, SignUppassword}
    localStorage.setItem("user", JSON.stringify(userId))

    Swal.fire({
        title: "Registration Successful",
        text: "You can now Sign In",
        icon: "success",
        confirmButtonText: "OK"
      }).then(()=>{
        window.location.href = "signIn.html"
      })
}

const SignIn = (event) =>{

    event.preventDefault()
        const SignInEmail = document.getElementById("signInEmail").value
        const SignInpassword = document.getElementById("signInpassword").value

        const SignInUser = JSON.parse(localStorage.getItem("user"))
        console.log(SignInUser)

        if(SignInUser && SignInUser.SignUpemail === SignInEmail && SignInUser.SignUppassword === SignInpassword){
            Swal.fire({
                title: "SignIn Successful",
                icon: "success",
                confirmButtonText: "OK"
              }).then(()=>{
                window.location.href = "index.html"
              })
        }else{
            Swal.fire({
                title: "SignIn Failed",
                text: "invalid email or password",
                icon: "error",
                confirmButtonText: "OK "
              })
        }if(SignInUser.SignInpassword.length==2){
          alert("Please Make biger Password")
      }
    }
