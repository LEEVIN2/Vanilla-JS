//alert("hi");

const a = 2;
const b = 3;
const myName = "Lee";
console.log(a + b);
console.log(a * b);
console.log("my name is " + myName);

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

//array : 한가지 property를 가진 데이터를 저장
const dayOfWeek = ["mon", "tue", "wed"];
dayOfWeek.push("thu");     //추가
console.log(dayOfWeek[1]); //출력

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