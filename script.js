
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginbtn = document.getElementById("login-btn")
let errorMsg = document.getElementById("error-msg")
let savedEmail = localStorage.getItem("email")
let savedPassword = localStorage.getItem("password")


loginbtn.addEventListener("click", function(){
    let emailValue = email.value; // o anki değeri
    let passwordValue = password.value; // o anki değeri 

    // alan boş/dolu kontrolü
    if(emailValue == "" || passwordValue == ""){
        errorMsg.innerText = ("Alanları boş bırakma!")
        return; // kodu durdur
    }
    
    // email format kontrolü
    if(!emailValue.includes("@")){
        errorMsg.innerText = ("Geçerli bir email adresi girin @ eksik")
        return;
    }

    // email içinde boşluk varmı
    if(/\s/.test(emailValue)){ // \s karakter sınıfı whitespace (boşluk karakterleri) demek
        errorMsg.innerText = ("Geçerli bir email adresi giriniz boşluk var!")
        return;
    }

   

    // şifre kontrolü
    if(passwordValue.length < 6 ){
        errorMsg.innerText = ("Şifre en az 6 karakter olmalı")
        return; // kodu durdur
    }

     // büyük harf kontrolü
     if(!/[A-Z]/.test(passwordValue)){
        errorMsg.innerText = ("En az 1 büyük harf olmalı")
        return;
     }


    // LOCALDEKİ VERİYLE EŞLEŞTİRME
    if(emailValue === savedEmail && passwordValue === savedPassword){
        errorMsg.innerText = "";
        window.location.href = "main.html";
    }else{
        errorMsg.innerText = "Email veya şifre hatalı!";
    }

} )




