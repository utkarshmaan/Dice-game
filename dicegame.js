var n=Math.random();
n=n*6;
//it will give number fron 0-5.9999
n=Math.floor(n)+1;
//var n=Math.floor(Math.random()*6)+1;
console.log(n);

var randomDiceImange="dice"+n+".png";

//var randomImageSource="images/+randomDiceImange;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImange);



var m=Math.random();
m=m*6;
//it will give number fron 0-5.9999
m=Math.floor(m)+1;
console.log(m);

var randomDiceImage2="dice"+m+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

if(n>m){
document.querySelector("h2").innerHTML="The winner is player 1";
}
if(n===m){
document.querySelector("h2").innerHTML="Draw !";
}
if(n<m){
document.querySelector("h2").innerHTML="The winner is player 2";
}
