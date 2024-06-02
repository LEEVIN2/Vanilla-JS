// array에 명언 준비

// array : []
// object : {}

const quotes = [
    {
        quote: "While there's life, there's hope",
        author: "Cicero",
    },
    {
        quote: "Walking three hours a day, in seven years you would have walked around the world",
        author: "Samuel Johnson",
    },
    {
        quote: "If you concentrate always on the present, you'll be a happy man",
        author: "Paulo Coelho",
    },
    {
        quote: "God never forsakes the courageous",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Don't confuse a single defeat with a final defeat",
        author: "F. Scott Fitzgerald",
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