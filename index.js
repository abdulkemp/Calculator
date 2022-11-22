var clear = document.querySelector("#clear");
var remove = document.querySelector("#remove");

var divide = document.querySelector("#divide");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var mul = document.querySelector("#mul");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var plus = document.querySelector("#plus");
var seven = document.querySelector("#seven");

var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var minus = document.querySelector("#minus");
var point = document.querySelector("#point");
var zero = document.querySelector("#zero");
var equal = document.querySelector("#equal");

var write_me = document.querySelector("#type");
var result = document.querySelector("#result");

one.onClick = () => {
    type_to(1);
}
two.onClick = () => {
    type_to(2);
}
three.onClick = () => {
    type_to(3);
}
four.onClick = () => {
    type_to(4);
}
five.onClick = () => {
    type_to(5);
}
six.onClick = () => {
    type_to(6);
}
seven.onClick = () => {
    type_to(7);
}
eight.onClick = () => {
    type_to(8);
}
nine.onClick = () => {
    type_to(9);
}
clear.onClick = () => {
    type_to(0);
}
remove.onClick = () => {
    type_to(0);
}
divide.onClick = () => {
    type_to("/");
}
mul.onClick = () => {
    type_to("*");
}
plus.onClick = () => {
    type_to("+");
}
minus.onClick = () => {
    type_to("-");
}
point.onClick = () => {
    type_to(".");
}
zero.onClick = () => {
    type_to(0);
}

var type_to = text =>{
    if (write_me.innerText == "") {
        write_me.innerText = text;
    } else if(write_me.innerText.length <= 23){
        write_me.innerText = write_me.innerText = text;
    } else{
        alert("Digit Limit Reached");
    }
} 
