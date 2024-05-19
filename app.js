//getElementById
// const title = document.getElementById("title");
// console.log(title);           //<h1 class="Hi" id="title">Hello</h1>
// console.log(title.id);        //title
// console.log(title.className); //Hi

// title.innerText = "Hello2"

//getElementsByClassName, getElementsByTagName
// const Hi = document.getElementsByClassName("Hi");
// console.log(Hi); //array

// const Hi2 = document.getElementsByTagName("h1");
// console.log(Hi2); //array

//------------------------------------------------------

//querySelector, querySelectorAll
//1개의 element 반환 (조건에 해당되는게 여러개라도 첫번째 값만 가져옴)
// const Hi3 = document.querySelector(".Hi h1");
// console.log(Hi3); //<h1>Hello</h1>

// const title2 = document.querySelector("#title"); //CSS style
// const title3 = document.getElementById("title"); //위와 같은 내용

// //여러개의 element 반환 (조건에 해당되는 모든 값을 가져옴)
// const Hi4 = document.querySelectorAll(".Hi h1");

//------------------------------------------------------

//event : click

// <div class="hello">
//    <h1>Hello</h1>
// </div>

//1)페이지에서 element 찾아오기
//const title = document.querySelector("div.hello:first-child h1");
const title2 = document.querySelector(".hello h1"); //위와 같은 내용

function clickTitle() {
    title2.style.color = "blue";
    console.log("click");
}
//2)찾은 element에 EventListener 추가
title2.addEventListener("click", clickTitle);