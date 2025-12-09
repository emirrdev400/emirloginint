
let userName = document.getElementById("UserName");
let regEmail = document.getElementById("regEmail");
let regPassword = document.getElementById("regPassword");
let confirmPassword = document.getElementById("confirmPassword");
let registerBtn = document.getElementById("registerBtn");
let reg_errorMsg = document.getElementById("reg_errorMsg");


registerBtn.addEventListener("click", function() {
    let userNameValue = userName.value;
    let regEmailValue = regEmail.value;
    let regPasswordValue = regPassword.value;
    let confirmPasswordValue = confirmPassword.value;

    // boşluk kontrol
    if(userName.value == "" || regEmail.value == "" || regPassword.value == ""|| confirmPassword.value == "" ){
        reg_errorMsg.innerText = ("Alanları boş bırakmayınız.")
        return;
    }

    // email format kontrolğ
    if(!regEmail.value.includes("@")){
        reg_errorMsg.innerText = ("Geçerli bir email adresi girin @ eksik")
        return;
    }

    // email içinde boşluk varmı
    if(/\s/.test(regEmailValue)){
        reg_errorMsg.innerText = ("Geçerli bir email adresi giriniz boşluk var!")
        return;
    }

    // şifre karakter sayısı kontrolü
    if(regPasswordValue.length < 6){
        reg_errorMsg.innerText = ("Şifre en az 6 karakter olmalı")
        return;
    }

    // şifre eşleşme kontrolü
    if(!(regPasswordValue == confirmPasswordValue)){
        reg_errorMsg.innerText = ("Şifreler eşleşmiyor")
    }
    // bilgileri localStorage'a kaydet (yapay zeka yaptı kaydetmeyi)

   localStorage.setItem("email", regEmailValue);
   localStorage.setItem("password", regPasswordValue);
   localStorage.setItem("usrname", userNameValue);

// kayıt başarılıysa
   reg_errorMsg.innerText = "";
    alert("Kayıt Başarılı, Giriş sayfasına yönlendiriliyorsunuz")
    window.location.href = "index.html"
})
