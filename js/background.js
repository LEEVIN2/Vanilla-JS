// 목표 : 랜덤 배경화면 구현하기
// <img src="img/0.jpg" />
// <img src="img/1.jpg" />

// 배열에 요소 넣고 랜덤으로 뽑아내기
const images = ["0.jpg", "1.jpg", "2.png"];
const changeImg = images[Math.floor(Math.random()*images.length)];

// <img> 태그 만들기
// document.createElement() : javascript에서 html element를 생성할 수 있음
// const chosenImg =  document.createElement("img"); (CSS위해서 주석처리)
// chosenImg.src = `img/${changeImg}`; (CSS위해서 주석처리)

// document.body.appendChild() : body 맨 아래에 html element를 추가
// document.body.prepend() : body 맨 위에 html element를 추가
// document.body.appendChild(chosenImg); (CSS위해서 주석처리)

document.body.style.backgroundImage = `url(img/${changeImg})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';