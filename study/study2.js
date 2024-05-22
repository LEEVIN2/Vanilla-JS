//getElementById

const title = document.getElementById("title");
console.log(title);           //<h1 class="Hi" id="title">Hello</h1>
console.log(title.id);        //title
console.log(title.className); //Hi

title.innerText = "Hello2"

getElementsByClassName, getElementsByTagName
const Hi = document.getElementsByClassName("Hi");
console.log(Hi); //array

const Hi2 = document.getElementsByTagName("h1");
console.log(Hi2); //array

//------------------------------------------------------

//querySelector, querySelectorAll

//1개의 element 반환 (조건에 해당되는게 여러개라도 첫번째 값만 가져옴)
const Hi3 = document.querySelector(".Hi h1");
console.log(Hi3); //<h1>Hello</h1>

const title2 = document.querySelector("#title"); //CSS style
const title3 = document.getElementById("title"); //위와 같은 내용

//여러개의 element 반환 (조건에 해당되는 모든 값을 가져옴)
const Hi4 = document.querySelectorAll(".Hi h1");

//------------------------------------------------------

//EventListener

//EventListener 찾는 방법
//1)구글에서 "h1 html element mdn" 검색 후 "Web APIs"가 들어간 링크 접속
//2)console.dir(title); : on~로 시작

<div class="hello">
   <h1>Hello</h1>
</div>

//1)javascript로 HTML element 찾아오기
//const title = document.querySelector("div.hello:first-child h1");
const title4 = document.querySelector(".hello h1"); //위와 같은 내용

function clickTitle() {
    title2.style.color = "blue";
    console.log("click");
}

function mouseenterTitle() {
    title2.innerText = "Mouse is here!";
}

function mouseleaveTitle() {
    title2.innerText = "Mouse is gone!";
}

function resizeWindow() {
    document.body.style.backgroundColor = "tomato";
}

function copyWindow() {
    alert("copier!");
}

function offlineWindow() {
    alert("offline!");
}

function onlineWindow() {
    alert("online!");
}

//2)찾은 element에 EventListener 추가
//EventListener 사용하는 방법
//title2.addEventListener("click", clickTitle);
title2.onclick = clickTitle;
title2.addEventListener("mouseenter", mouseenterTitle);
title2.addEventListener("mouseleave", mouseleaveTitle);

window.addEventListener("resize", resizeWindow);
window.addEventListener("copy", copyWindow);
window.addEventListener("offline", offlineWindow);
window.addEventListener("online", onlineWindow);

//------------------------------------------------------

//EventListener2

const h1 = document.querySelector(".hello h1");
console.log(h1); //<h1>Hello</h1>

function clickH1() {
    let currentColor = h1.style.color;
    if(currentColor === "blue"){
        currentColor = "tomato";
    } else {
        currentColor = "blue";
    }
    h1.style.color = currentColor;
}

h1.addEventListener("click", clickH1);

//------------------------------------------------------

//위 내용을 CSS를 사용해 변경

//현재 HTML Code
// <div class="hello">
//     <h1>Hello</h1>
// </div>

//현재 CSS Code
// h1{
//     color: blue;
//     transition: color 0.5s ease-in-out;
// }
// .active{
//     color: tomato;
// }

// const h1 = document.querySelector(".hello h1");

function clickH1() {
    const currentclassName = "active";
    if(h1.className === currentclassName) {
        h1.className = "";
    } else {
        h1.className = currentclassName;
    }
}

//------------------------------------------------------

//그런데 위의 코드는 아래와 같이 h1에 "sexy-font"라는 클래스를 추가했을때, className을 통째로 변경함
//따라서 "sexy-font"는 남겨두고 "h1"과 "active"를 번갈아가며 color만 변경하기가 어려움
// <div class="hello">
//     <h1 class="sexy-font">Hello</h1>
// </div>

//classList : contains, remove, add
              
//따라서 아래와 같이 작성해야 "sexy-font" 클래스는 계속 남아있고
//currentclassName에 해당되는 "h1"과 "active" 클래스가 번갈아가며 변경됨
function clickH1() {
    const currentclassName = "active";
    if(h1.classList.contains(currentclassName)){
        h1.classList.remove(currentclassName);
    } else {
        h1.classList.add(currentclassName);
    }
}

//위 코드 결과
// <div class="hello">
//     <h1 class="sexy-font active">Hello</h1>
// </div>

//------------------------------------------------------

//toggle : className 존재 유무를 확인
//className 존재 O className 삭제
//className 존재 X className 추가

//위 코드와 같은 결과
function clickH1() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", clickH1);