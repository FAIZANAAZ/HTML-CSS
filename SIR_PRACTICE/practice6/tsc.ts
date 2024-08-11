let signup_btn = document.getElementById("signup-btn")

let signin_btn = document.getElementById("signin-btn")

let nameField :any= document.getElementById("namefield")

let  title :any= document.getElementById("title")

signin_btn?.addEventListener("click",()=>{
    nameField.style.maxHeight="0"
    title.innerHTML="Sign In"
    signup_btn?.classList.add("disable")
    signin_btn?.classList.remove("disable")
})



signup_btn?.addEventListener("click",()=>{
    nameField.style.maxHeight="60px"
    title.innerHTML="Sign Up"
    signup_btn?.classList.remove("disable")
    signin_btn?.classList.add("disable")
})