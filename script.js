const button = document.getElementById('btn2');
let search = document.getElementById('text')

function search1(){
    if (search.style.display == 'none') {
        search.style.display = 'block';
    }
    else {
        search.style.display = 'none';

    }
}

function hide(){
    let head = document.getElementById('head1');
    let but = document.getElementById('button2');
    head.style.display = "none";
    but.style.display = "block";
}

function show(){
    let head = document.getElementById('head1');
    let but = document.getElementById('button2');
    head.style.display ="block";
    but.style.display = "none";

}

// button.addEventListener('click', event => {
//     if (search.style.display == 'none') {
//         search.style.display = 'block';
//     }
//     else {
//         search.style.display = 'none';

//     }
// });

// function search(){
//     if (search.style.display == 'none') {
//         search.style.display = 'block';
//     }
//     else {
//         search.style.display = 'none';

//     }
// }

//contactform logic


// console.log(email);
function submitform() {
    let submit = document.getElementsByClassName('submit');
    let email = document.getElementById('email');
    let name = document.getElementById('name');
    let number = document.getElementById('phone');
    let number2 = document.getElementById('phone1');
    let number3 = document.getElementById('phone2');
    
    if ((email.value == "") || (name.value == "") || (number.value == "")) {
        alert("form empty! filled form properly")
    }
    else {
        alert("you form has been successfully submitted")
        email.value = "";
        name.value = "";
        number.value = "";
    }
}

// registration login




function registration() {
    var name = document.getElementById('name4');
    var email = document.getElementById('email1');
    var number = document.getElementById('num');
    // var username=document.getElementById('username').value;
    var password = document.getElementById('password');
    var passwordc = document.getElementById('passwordc');
    if ((name.value == "") || (email.value == "") || (number.value == "") || (password.value == "") || (passwordc.value == "")) {
        alert("filled form properly!")

    }
    else {
        alert("your information submitted")
    }

}

// loginform logic



let name1 = document.getElementById('name1');
let pass = document.getElementById('pass');
let btn11 = document.getElementById('btn11');
let btn23 = document.getElementById('btn23');

console.log(name1)
console.log(pass)
function submit2() {
    if ((name1.value == "") || (pass.value == "")) {
        alert("form empty!");
        // btn23.style="display:none;"
    }
    else {
        btn23.style = "display:block; margin-left: 228px;"

    }
}

function buy(){
    alert("Thank You For Buy This Product");
}
function cart(){
    alert("Your Product Added Into Cart...");
}
function cart1(){
    alert("please login first..")
}
function buy1(){
    alert("please login first..")
}
