var name=document.getElementById('name4');
var email=document.getElementById('email1');
var number=document.getElementById('num');
// var username=document.getElementById('username').value;
var password=document.getElementById('password');
var passwordc=document.getElementById('passwordc');


function registration(){
    if((name.value=="")||(email.value=="")||(number.value=="")||(password.value=="")||(passwordc.value=="")){
        alert("filled form properly!")

    }
    else{   
        alert("your information submitted")
    }

}
