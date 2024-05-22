// 시계 구현하기 전 개념알기 (4)

// setInterval(매번)과 setTimeout(한번)
// first argument : 실행하고자 하는 function
// second argument : 호출되는 function 간격 (단위는 ms, milliseconds)
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

// javascript가 가진 Date object
// new Date : 오늘 날짜, 시간을 가져옴
// 실행 : console.log(new Date());
// 결과 : Wed May 22 2024 11:29:24 GMT+0900 (한국 표준시)
// 활용 :
// const date = new Date();
// console.log(date.getDate());  // 22
// console.log(date.getHours()); // 11

// date.getSeconds() 출력 시 1,2,...11,12로 나오는데, 01,02로 나오게 하기
// padStart() : string에 쓰이는 function으로, 앞에 문자추가
// padEnd() : 뒤에 문자추가
// first argument : 최대 길이
// second argument : 최대 길이가 아니라면, padding을 추가
// 실행 : "1".padStart(2, "0") 
// 결과 : "01"

// 주의 : date.getSeconds().padStart(2, "0"); 실행 시 오류 원인은 date.getSeconds()는 number인데 padStart는 string과 쓰이기 때문!
// number → string 전환 방법 : String()
// string → number 전환 방법 : parseInt()
// parseInt() 추가설명 https://velog.io/@dlqls47/Vanilla-JS#prompt

//------------------------------------------------------

// 시계 구현하기

// const clock = document.querySelector("clock");
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // clock.innerText = hours + " : " + minutes + " : " + seconds;
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1000ms(1초)