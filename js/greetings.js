// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 코드 더 짧게
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function clickLoginBtn() {
//     const username = loginInput.value;
//     if(username === "") {
//         alert("plz username!");
//     } else if(username.length > 10) {
//         alert("username is too long!");
//     } else {
//         alert("hello! " + username);
//     }
// }
// loginButton.addEventListener("click", clickLoginBtn);

// 위와 같은 방법으로 검사하는 것도 좋지만, HTML에서 제공하는 기능을 쓰면 jsp파일에는 더 적은 코드로 작성할 수 있다
// input의 유효성 검사를 작동시키기 위해선 form 안에 있어야 하기 때문에, div → form 변경
// 변경한 HTML Code : <input required maxlength="10" type="text" placeholder="What is your name?" />

//------------------------------------------------------

// preventDefault() : event를 통한 브라우저의 기본동작을 막아줌
// ex : form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있는데, 그걸 막아줄 수 있음
// 첫번째 argument 생성 시, event에 대한 정보가 들어있음
// function loginSubmit(event) {
//     event.preventDefault();
//     console.log(event);
// }
// preventDefault() 추가 예시
// HTML Code
// <a href="https://nomadcoders.co">Go to courses</a>
// Javascript Code
// const link = document.querySelector("a");
// function clickLink(event) {
//     event.preventDefault(); // nomadcoders.co로 이동하는걸 막음
// }
// link.addEventListener("click", clickLink);

//------------------------------------------------------

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 자주 쓰이는 코드 2개 function으로 만들기
function paintGreetings() {
    const username = localStorage.getItem("username");
    greeting.innerText = `Hello ${username}`; // 문자를 합치는 2가지 방법 : "Hello " + username; 또는 `Hello ${username}`
    greeting.classList.remove("hidden");
}

// Login #first-step
const savedUsername = localStorage.getItem("username");

if(savedUsername === null) {
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings();
}

// Login #second-step
function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username", loginInput.value); // localstorage : 브라우저에 정보를 저장할 수 있게해주는 작은 DB같은 API (set, get, remove)
    paintGreetings();
}