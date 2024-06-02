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

// = arrayTodos.forEach((todo) => paintTodo(todo));
// = arrayTodos.forEach(paintTodo);
// forEach가 array의 요소를 하나씩 넘겨주는데, 마침 paintTodo 함수가 argument(인수)를 하나씩 받고 있기 때문에 이렇게 써도됨
// 또는 아래처럼 우리가 아는 방식으로 풀 수도 있음
// function todo(item) {
//     console.log(item);
// }

// 4) 배열명.filter
// 배열의 각 요소를 하나씩 호출해 필터를 거쳐 true일 경우만 노출 (false면 제거)
// 결과는 false인 요소는 제거 후 새로운 배열로 생성됨
// = function 함수명(배열) {return 배열.id !== li.id};
// = arr.filter(item => item > 2 )

//------------------------------------------------------

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
// ↑ same : const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

// 기존 : const todos = [];
// 이렇게 하면 애플리케이션이 실행(새로고침)될 때마다 빈 array를 가짐
// 따라서 새로고침 후 입력값을 넣으면 기존 localStorage에 추가되는게 아니라 새로 덮어씌워지게 됨
// 변경 :
let todos = JSON.parse(localStorage.getItem("todos"));

// 4.삭제버튼
function deleteTodoBtn(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todos => todos.id !== parseInt(li.id));
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 2.입력받은 input값을 li로 나열
function paintTodo(newTodo) {
    const todoLi = document.createElement("li");
    // 4.삭제버튼 (구별하기위해 개별 id값 추가)
    todoLi.id = newTodo.id;
    const todoSpan = document.createElement("span");
    const todoButton = document.createElement("button");

    todoSpan.innerText = newTodo.text;
    todoButton.innerText = "✘";
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

    // 4.삭제버튼 (구별하기위해 개별 id값 생성)
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };

    // 3.새로고침 시 기존 내용 유지되게 하기
    // 3-1.input값을 array와 localStorage에 저장 → 1) 새로운 todo를 저장하기 위함

    // 오류코드 : todos.push(newTodo);
    // 오류원인 :
    // null 참조 오류 → 배열이 초기화되지 않았거나 명시적으로 null로 설정된 경우 발생
    // 첫 사용이라 todos array에 localStorage 값이 없다면 null이 되는데, 배열이 null이면 push할 수 없음 (push 메서드는 기존 배열에 새로운 요소를 추가하는데 사용하기 때문)
    // 오류해결 : null일때 배열 초기화 코드 추가, 위에 정의한 todos 타입 const → let 변경
    if (todos === null) {
        todos = [];
    }
    todos.push(newTodoObj);
    localStorage.setItem("todos", JSON.stringify(todos));

    paintTodo(newTodoObj);
}
todoForm.addEventListener("submit", submitTodoForm);

// 3-2.localStorage에 저장된 값(기존 내용)을 새로운 array에 넣고 뿌려주기 → 2) 새로고침 후에도 기존의 todo를 보여주기 위함
const arrayTodos = JSON.parse(localStorage.getItem("todos"));
// 오류코드 : arrayTodos.forEach(paintTodo);
// 오류원인 : 처음에 null 값이면 오류가 나서 조건문으로 해결
// 오류해결 :
if (arrayTodos !== null) {
    arrayTodos.forEach(paintTodo);
}