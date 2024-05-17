//alert("hi");

const a = 2;
const b = 3;
const myName = "Lee";
console.log(a + b);
console.log(a * b);
console.log("my name is " + myName);

//------------------------------------------------------

//고정할 variable(변수) : const
//수정할 variable(변수) : let
let yourName = "Vin"
console.log("your name is " + yourName);
yourName = "Bin"
console.log("your name is " + yourName);

//데이터타입에 상관없이 const or let
let amIFat = false;
amIFat = null; //define
let something; //undefie

//------------------------------------------------------

//array : 한가지 property를 가진 데이터를 저장
const dayOfWeek = ["mon", "tue", "wed"];
dayOfWeek.push("thu");     //추가(맨끝에)
dayOfWeek[1] ="tues"       //수정
console.log(dayOfWeek[1]); //출력

//배열 안에는 여러 데이터타입이 올 수 있음
//아래 예시를 object로 하는 이유 : array로는 뭐가 10이고, null인지 한눈에 알 수 없으니까!
const job = "teacher";
const player3 = ["Lee", 10, true, null, undefined, job];

//------------------------------------------------------

//object : 다양한 property를 가진 데이터를 저장
const player = {
    name: "Lee",
    points: 10,
    fat: true
}
player.sex = "female" //추가
player.fat = false;   //수정
console.log(player);  //출력
console.log(player.name);

//------------------------------------------------------

//function과 argument(인수)
//function의 argument(인수)는 해당 함수 안에서만 쓰이고 밖에서는 사용불가!
function sayHello(name, age){
    console.log("Hello! My name is " + name + " and I'm " + age);
}
sayHello("Lee", 24);
sayHello("Vin", 25);

//object 안에서의 function
const player2 = {
    name: "Lee",
    sayHello: function(name, age){
        console.log("Hello! My name is " + name + " and I'm " + age);
    }
}
console.log(player.name);
player2.sayHello("Lee", 26);

//------------------------------------------------------

//복습 후 숙제
const calcultor = {
    add: function(a, b){
        console.log(a+b);
    },
    min: function(a, b){
        console.log(a-b);
    },
    div: function(a, b){
        console.log(a/b);
    },
    power: function(a, b){
        console.log(a**b);
    }
}
calcultor.add(1, 2);
calcultor.min(1, 2);
calcultor.div(1, 2);
calcultor.power(1, 2);

//------------------------------------------------------

//return : function으로부터 도출되는 값, function 종료시점
//case 1 : 26
const age = 24;
function koreaAge(changeAge){
    return changeAge + 2;
}
const myAge = koreaAge(age);
console.log(myAge);

//case 2 : Hello!
const age2 = 24;
function koreaAge2(changeAge){
    changeAge + 2;
    return "Hello!";
    console.log("Hi!"); //return 후 function 종료돼서 콘솔에 Hi 안나옴
}
const myAge2 = koreaAge2(age2);
console.log(myAge2);

//------------------------------------------------------

const age3 = prompt("How old are you?");

//prompt에 23이라고 입력한 경우
console.log(age3);                  //23
console.log(parseInt(age3));        //23
console.log(typeof age3);           //string
console.log(typeof parseInt(age3)); //number

//prompt에 AA라고 입력한 경우
console.log(age3);                  //AA
console.log(parseInt(age3));        //NaN(Not a Number)
console.log(typeof age3);           //string
console.log(typeof parseInt(age3)); //number

//isNaN : 인수가 number면 false, 아니면 true 반환
console.log(isNaN(age3));

//isNaN 활용
const age4 = parseInt(prompt("How old are you?"));
if(isNaN(age4) || age4 < 0){
    console.log("숫자를 입력해 주세요"); //조건이 true(참)일 경우
}else{
    console.log("정상적으로 입력되었습니다"); //조건이 fales(거짓)일 경우
}

//operator(연산자) : and(&&), or(||), equal(===), not equal(!==)