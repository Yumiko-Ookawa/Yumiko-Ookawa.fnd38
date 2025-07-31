'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//img要素(hamburg)を作成--------------------------------
function cook1() {
let imghamburg = document.createElement("img");
imghamburg.src = "images/hamburg.png";
Object.assign(imghamburg.style,{
    display: "block",
    marginBottom: "-15px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imghamburg);
}

//ボタンを押したらイベントが発生する
const btn1 = document.getElementById("hamburg");
btn1.addEventListener("click", cook1);

//img要素(cheese)を作成---------------------------------
function cook2() {
let imgcheese = document.createElement("img");
imgcheese.src = "images/cheese.png";
Object.assign(imgcheese.style,{
    display: "block",
    marginBottom: "-40px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgcheese);
}

//ボタンを押したらイベントが発生する
const btn2 = document.getElementById("cheese");
btn2.addEventListener("click", cook2);

//img要素(egg)を作成-----------------------------------
function cook3() {
let imgegg = document.createElement("img");
imgegg.src = "images/egg.png";
Object.assign(imgegg.style,{
    display: "block",
    marginBottom: "-15px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgegg);
}

//ボタンを押したらイベントが発生する
const btn3 = document.getElementById("egg");
btn3.addEventListener("click", cook3);

//img要素(tomato)を作成--------------------------------
function cook4() {
let imgtomato = document.createElement("img");
imgtomato.src = "images/tomato.png";
Object.assign(imgtomato.style,{
    display: "block",
    marginBottom: "-15px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgtomato);
}

//ボタンを押したらイベントが発生する
const btn4 = document.getElementById("tomato");
btn4.addEventListener("click", cook4);

//img要素(lettuce)を作成------------------------------
function cook5() {
let imglettuce = document.createElement("img");
imglettuce.src = "images/lettuce.png";
Object.assign(imglettuce.style,{
    display: "block",
    marginBottom: "-20px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imglettuce);
}

//ボタンを押したらイベントが発生する
const btn5 = document.getElementById("lettuce");
btn5.addEventListener("click", cook5);

//img要素(pickles)を作成------------------------------
function cook6() {
let imgpickles = document.createElement("img");
imgpickles.src = "images/pickles.png";
Object.assign(imgpickles.style,{
    display: "block",
    marginBottom: "-25px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgpickles);
}

//ボタンを押したらイベントが発生する
const btn6 = document.getElementById("pickles");
btn6.addEventListener("click", cook6);

//img要素(source)を作成------------------------------
function cook7() {
let imgsource = document.createElement("img");
imgsource.src = "images/source.png";
Object.assign(imgsource.style,{
    display: "block",
    marginBottom: "-40px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgsource);
}

//ボタンを押したらイベントが発生する
const btn7 = document.getElementById("source");
btn7.addEventListener("click", cook7);

//img要素(bun2)を作成------------------------------
function cook8() {
let imgbun2 = document.createElement("img");
imgbun2.src = "images/bun2.png";
Object.assign(imgbun2.style,{
    display: "block",
    marginBottom: "-10px",
    marginLeft: "73px"
});

//img要素を追加
let cookingarea = document.getElementById("burger");
cookingarea.prepend(imgbun2);
}

//ボタンを押したらイベントが発生する
const btn8 = document.getElementById("bun2");
btn8.addEventListener("click", cook8);

//要素を削除する------------------------------------
function cook9() {
location.reload();
}

//ボタンを押したらイベントが発生する
const btn9 = document.getElementById("clear");
btn9.addEventListener("click", cook9);
