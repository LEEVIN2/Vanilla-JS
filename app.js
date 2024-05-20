// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 코드 더 짧게
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

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