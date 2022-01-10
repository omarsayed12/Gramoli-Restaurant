// define global variable
let emailArray=[];
let passwordArray=[];
let alertForgot = document.querySelector(".alert-forgot");
let alertForgotPass = document.querySelector(".alert-forgot-pass");

// login and register variable define
let regTab = document.getElementById("btnRregister");
let loginTab = document.getElementById("btnLogin");

//form sign in variable define
let signInForm = document.getElementById("login");
let email = document.getElementById("logMail");
let password = document.getElementById("logPass");
let btnSubmit = document.getElementById("submit");

// form register variable define
let registerForm = document.getElementById("register");
let emailReg = document.getElementById("reMail");
let numberTel = document.querySelector('#phone');
let passwordReg = document.getElementById("repass");
let passwordRetype = document.getElementById("rePassPlaceholder");
let regSubmit = document.getElementById("regSubmit");

// form forgot mail variable define
let forgetRgisterForm = document.getElementById("forgot");
let forgotMail = document.getElementById("forgetMail");
let submitForgotPass = document.getElementById("forgetPass");


// function to change style register button
regTab.addEventListener("click", (event) => {

    registerForm.style.visibility="visible";
    signInForm.style.visibility="hidden";
    forgetRgisterForm.style.visibility="hidden";

    regTab.style.backgroundColor="#72a73e";
    loginTab.style.backgroundColor="#FFF";
    regTab.style.color = "#FFF";
    loginTab.style.color="#000";

})

// function to change style log in button
loginTab.addEventListener("click", (event)=> {
    registerForm.style.visibility="hidden";
    signInForm.style.visibility="visible";
    forgetRgisterForm.style.visibility="hidden";

    loginTab.style.backgroundColor="#72a73e";
    regTab.style.backgroundColor="#FFF";
    regTab.style.color = "#000";
    loginTab.style.color="#FFF";
})

// function to check forget pass
submitForgotPass.addEventListener("click", (event)=> {
  registerForm.style.visibility="hidden";
  signInForm.style.visibility="hidden";
  forgetRgisterForm.style.visibility="visible";
  loginTab.style.backgroundColor="#72a73e";
})

// function event Sign In
btnSubmit.addEventListener("click", (event)=> {
  event.preventDefault();

  let i = emailArray.indexOf(email);
  if(document.documentElement.lang === "ar") {
    if(emailArray.indexOf(email) === -1){
      if (email.value === "") {
        alertForgot.textContent = "من فضلك ادخل البريد الالكتروني";
        return ;
      }
    }
    // else if(passwordArray[i] !== password){
    //   if (password.value === ""){
    //     alertForgotPass.textContent = "ادخل كلمه المرور";
    //     return ;
    //   }
    //   alertForgotPass.textContent = "كلمه المرور لا تطابق"
    //   return ;
    // }
  } else if (document.documentElement.lang === "en") {
      if(emailArray.indexOf(email) === -1){
      if (email.value === "") {
        alertForgot.textContent = "Please enter your email";
        return ;
      }
    }
    else if(passwordArray[i] !== password){
      if (password.value === ""){
        alertForgotPass.textContent = "enter password"
        return ;
      }
      alertForgotPass.textContent = "Password does not match"
      return ;
    }
  }
  check();
  password.value = "";
  email.value = "";
})
regSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  var validForm = false;
  if(emailReg.value  !== "" &&
    passwordReg.value !== ""&&
    numberTel.value !== "" &&
    passwordRetype.value !== "" &&
    passwordReg.value === passwordRetype.value &&
    emailArray.indexOf(emailReg) !== -1) {
      validForm = true;
  }

  if(validForm) {
    localStorage.setItem("email", emailReg.value);
    localStorage.setItem("pass", passwordReg.value);
    localStorage.setItem("number", numberTel.value);
    localStorage.setItem("passRetype", passwordRetype.value);
    window.location.href = "../index.html";
  }

  if(document.documentElement.lang === "ar") {
    if (emailReg.value === ""){
      let alertForgotReges = document.querySelector(".alert-forgot-reges");
      alertForgotReges.textContent = "من فضلك ادخل البريد لالكتروني";
      return ;

    } else if(numberTel.value === "") {
      let alertForgotTel = document.querySelector(".alert-forgot-tel");
      alertForgotTel.textContent = "ادخل رقم الجوال";
      return;
    }
    else if (passwordReg.value === ""){
      let alertForgotPass = document.querySelector(".alert-forgot-regesPass");
      alertForgotPass.textContent = "ادخل كلمه المرور"
      return ;
    }
    else if (passwordRetype.value == ""){
      let alertForgotReRegesPass  = document.querySelector(".alert-forgot-resRegesPass");
      alertForgotReRegesPass.textContent = "تأكيد ادخال كلمه المرور"
      return ;
    }
    else if ( passwordReg.value != passwordRetype.value ){
      alert("كلمة المرور لا تطابق كلمة السر الخاصة بك");
      return;
    }
    else if(emailArray.indexOf(emailReg) == -1){
      emailArray.push(emailReg);
      passwordArray.push(passwordReg);
      window.Location.href = "../index.html"
    }
  }
  else if (document.documentElement.lang === "en") {
    if (emailReg.value === "") {
      let alertForgotReges = document.querySelector(".alert-forgot-reges");
      alertForgotReges.textContent = "Please enter your email";
        return ;
    }else if(numberTel.value === "") {
       let alertForgotTel = document.querySelector(".alert-forgot-tel");
      alertForgotTel.textContent = "enter mobile number";
      return;
    }else if (passwordReg.value === ""){
      let alertForgotPass = document.querySelector(".alert-forgot-regesPass");
      alertForgotPass.textContent = "enter password"
      return ;
    }else if (passwordRetype.value == ""){
      let alertForgotReRegesPass  = document.querySelector(".alert-forgot-resRegesPass");
      alertForgotReRegesPass.textContent = "Confirm password"
      return ;
    }else if ( passwordReg.value != passwordRetype.value ){
      alert("Password don't match retype your Password");
      return;
    }else if(emailArray.indexOf(emailReg) == -1){
      emailArray.push(emailReg);
      passwordArray.push(passwordReg);
      window.Location.href = "../index.html"
    }
  }
})

forgot.addEventListener("click", (event) => {
  event.preventDefault();
  let forgotPassword = document.querySelector(".alert-forgot-password");

  if(document.documentElement.lang === "ar") {
    if(emailArray.indexOf(forgotMail.value) == -1){
      if (forgotMail.value === ""){
        forgotPassword.textContent = "من فضلك ادخل البريد الالكتروني";
        return ;
      }
      forgotPassword.textContent = "البريد الاكتروني غير موجود";
        return ;
      }

    } if(document.documentElement.lang === "en") {
        if(emailArray.indexOf(forgotMail.value) == -1){
      if (forgotMail.value === ""){
        forgotPassword.textContent = "Please enter your email";
        return ;
      }
      forgotPassword.textContent = "email not found";
        return ;
      }
    }
})

function check() {
  var storeMail = localStorage.getItem("email");
  var storPass = localStorage.getItem("pass");

  if(document.documentElement.lang === "ar") {
    if(email.value == storeMail && password.value == storPass) {
      window.location.href = "../index.html";
    } else if(password.value === ""){
      alertForgotPass.textContent = "كلمه المرور"
    } else {
      alertForgot.textContent  = "سجل اولا";
    }

  } if(document.documentElement.lang === "en") {
    if(email.value == storeMail && password.value == storPass) {
      window.location.href = "../home-page-en.html";
    } else if(password.value === ""){
      alertForgotPass.textContent = "enter Password";
    } else {
      alertForgot.textContent  = "Create an account";
    }
  }
}
