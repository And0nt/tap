let eye = eye.querySelector(".eye")
let inputPass = pass.querySelector(".pass")

eye.addEventListener("click", function() {
    if(inputPass.type === "password") {
        inputPass.type = "text"
        eye.src = "eye_close.jpg";
    }
    else{
        inputPass.type = "password";
        eye.src = "eye_open.jpg";
    }
});

let info = {}
let emailInput = email.querySelector("#email")
let passInput = pass.querySelector(".pass")

emailInput.addEventListener("input", function() {
    info.email = this.value
});

passInput.addEventListener("input", function(){
    info.pass = this.value
});


const emailLog = email.querySelector("#email")
const passLog = password.querySelector(".pass")
const button = submit.querySelector(".submit")

button.addEventListener("click", function(){
    console.log(emailLog.value)
    console.log(passLog.value)
});