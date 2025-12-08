
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginbtn = document.getElementById("login-btn")
let errorMsg = document.getElementById("error-msg")

loginbtn.addEventListener("click", function(){
    let emailValue = email.value; // o anki değeri
    let passwordValue = password.value; // o anki değeri 

    // alan boş/dolu kontrolü
    if(emailValue == "" || passwordValue == ""){
        errorMsg.innerText = ("Alanları boş bırakma!")
        return; // kodu durdur
    }
    
    // email format kontrolü
    if(!emailValue.include("@")){
        errorMsg.innerText = ("Geçerli bir email adresi girin @ eksik")
        return;
    }


    // şifre kontrolü
    if(passwordValue.length < 6 ){
        errorMsg.innerText = ("Şifre en az 6 karakter olmalı")
        return; // kodu durdur
    }

    window.location.href = "main.html"; // ana sayfaya atmak için

} )




