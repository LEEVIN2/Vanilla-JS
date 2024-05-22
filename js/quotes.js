// array에 명언 준비

// array : []
// object : {}

const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다",
        author: "키케로",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
        author: "사무엘존슨",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
        author: "파울로 코엘료",
    },
    {
        quote: "신은 용기있는 자를 결코 버리지 않는다",
        author: "켄러",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드",
    }
]

//------------------------------------------------------

// 랜덤 명언 구현하기 전 개념알기 (Math)

// Math module은 여러 function을 가지는데, 그중 random()과 floor()을 사용

// Math.random() : 0과 1사이의 숫자를 랜덤으로 제공
// 결과 : 0.738293027, 0.346713528 등

// Math.round() : 소수점 반올림
// Math.ceil() : 소수점 올림 (1.1 → 2)
// Math.floor() : 소수점 내림 (1.7 → 1)

// const todayQuotes = quotes[Math.floor(Math.random()*5)];
// 이렇게 하면 항상 array의 길이(명언의 갯수)를 알고 있어야 하니까
// 배열명.length

//------------------------------------------------------

// 랜덤 명언 구현하기

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;