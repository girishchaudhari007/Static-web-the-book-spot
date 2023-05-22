console.log("hellow")


let name1 = document.getElementById('name1');
let pass = document.getElementById('pass');
let btn11 = document.getElementById('btn11');
let btn23 = document.getElementById('btn23');

console.log(name1)
console.log(pass)
function submit2(){
    if ((name1.value =="") || (pass.value =="")) {
        alert("form empty!");
        // btn23.style="display:none;"
    }
    else{
        btn23.style="display:block; margin-left: 228px;"

    }
}
