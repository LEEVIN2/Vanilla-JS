// 목표
// 1) 입력 후 제출시 아래처럼 나오게 하기
// 2) 새로고침 시 기존 내용 유지되게 하기
// 3) 삭제버튼

// <ul id="todo-list">
//     <li>
//         <span>청소하기</span>
//         <button>X</button>
//     </li>
// </ul>

//------------------------------------------------------

// 개념
// 1) event.target
// event.target : 클릭된 HTML element
// 결과 : <button>❌<button>
// event.target.parentElement : 클릭된 element의 부모
// 결과 : <li>..<li>

// 2) JSON - stringify, parse
// JSON.stringify() : 값을 단순 String으로 변환
// 입력 : JSON.stringify([1, 2, 3, 4]);
// 결과 : "[1, 2, 3, 4]"
// JSON.parse() : 단순 String을 Javascript가 이해할 수 있는 array로 변환 
// 입력 : JSON.parse("[1, 2, 3, 4]");
// 결과 : [1, 2, 3, 4]

// 쓰임 : localStorage에 배열을 저장하려고 할때 JSON 사용 (todos는 array)
// X : localStorage.setItem("todos", todos);
// O : localStorage.setItem("todos", JSON.stringify(todos));
// 이유 :
// localStorage.setItem() 함수는 문자열만 저장할 수 있는데, 저장하려는 데이터가 배열이나 객체와 같은 복잡한 구조라면, JSON이라는 표준 형식으로 변환해 저장해야 함
// 따라서 배열을 저장한 localStorage.getItem()는 값을 가져올 때도 단순 문자열이 아니라 JSON 문자열을 받게 되고, 이 JSON 문자열을 다시 JavaScript 객체 또는 배열로 변환하려면 JSON.parse() 함수를 사용해야 함

// 3) forEach
// forEach : array의 각 item에 대해 function을 실행
// 형식 : 배열명.forEach((인수) => 함수내용);

// arrayTodos.forEach((todo) => paintTodo(todo));
// function todo(item) {
//     console.log(item);
// }

//------------------------------------------------------

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
// ↑ same : const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

// 기존 : const todos = [];
// 이렇게 하면 애플리케이션이 실행(새로고침)될 때마다 빈 array를 가짐
// 따라서 새로고침 후 입력값을 넣으면 기존 localStorage에 추가되는게 아니라 새로 덮어씌워지게 됨
// 변경 :
const todos = JSON.parse(localStorage.getItem("todos"));

// 4.삭제버튼
function deleteTodoBtn(event) {
    const li = event.target.parentElement;
    li.remove();
}

// 2.입력받은 input값을 li로 나열
function paintTodo(newTodo) {
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoButton = document.createElement("button");

    todoSpan.innerText = newTodo;
    todoButton.innerText = "❌";
    todoButton.addEventListener("click", deleteTodoBtn);

    // append는 맨 마지막에 위치해야함
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoButton);
    todoList.appendChild(todoLi);
}

// 1.입력 후 제출 시 input값 갖고 paintTodo()로 이동
function submitTodoForm(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    // 3.새로고침 시 기존 내용 유지되게 하기
    // 3-1.input값을 array와 localStorage에 저장 → 1) 새로운 todo를 저장하기 위함
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));

    paintTodo(newTodo);
}
todoForm.addEventListener("submit", submitTodoForm);

// 3-2.localStorage에 저장된 값(기존 내용)을 새로운 array에 넣고 뿌려주기 → 2) 새로고침 후에도 기존의 todo를 보여주기 위함
const arrayTodos = JSON.parse(localStorage.getItem("todos"));
arrayTodos.forEach((todo) => paintTodo(todo));