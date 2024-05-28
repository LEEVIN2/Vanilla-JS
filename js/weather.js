// 1.navigator.geolocation.getCurrentPosition()
// navigator.geolocation.getCurrentPosition(first, second) : user의 geolocation(위치) 정보를 줌
// first argumnet : 잘됐을때 실행될 함수 (이 함수는 1개의 인수만 받음, 인수명은 상관X)
// second argumnet : 에러 발생시 실행될 함수

// 2.위도, 경도 값 얻기
// first argumnet 함수에서 console.log(인수); 해보면 다양한 위치정보가 나옴
// 인수명.coords.변수명; : 원하는 변수의 값을 얻을 수 있음
// 예시 : const lat = position.coords.latitude;

// 3.위도, 경도 값을 장소로 바꾸기
// openweathermap.org 계정생성 → Current Weather Data → 아래 코드 복사
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// {API key}는 프로필에 가면 API Keys에 있음

// {lat}, {lon}, {API Key} 값을 넣고 링크로 이동하면 아래와 같은 내용이 나옴 (=json)
//https://api.openweathermap.org/data/2.5/weather?lat=35.1758497&lon=129.1023127&appid=b8a72d88b03f51704d99a5156a573902
// {
//     "coord": {
//       "lon": 129.1023,
//       "lat": 35.1758
//     },
//     "weather": [
//       {
//         "id": 803,
//         "main": "Clouds",
//         "description": "broken clouds",
//         "icon": "04d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 293.98,
//       "feels_like": 293.48,
//       "temp_min": 293.98,
//       "temp_max": 293.98,
//       "pressure": 1005,
//       "humidity": 52
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 5.66,
//       "deg": 50
//     },
//     "clouds": {
//       "all": 75
//     },
//     "dt": 1716884661,
//     "sys": {
//       "type": 1,
//       "id": 8086,
//       "country": "KR",
//       "sunrise": 1716840726,
//       "sunset": 1716892199
//     },
//     "timezone": 32400,
//     "id": 1838519,
//     "name": "Busan",
//     "cod": 200
//   }

// 4.temp 단위 변경
// https://api.openweathermap.org/data/2.5/weather?lat=35.1730232&lon=129.0981821&appid=b8a72d88b03f51704d99a5156a573902 : 293.79로 켈빈(kelvin)온도로 나옴
// https://api.openweathermap.org/data/2.5/weather?lat=35.1730232&lon=129.0981821&appid=b8a72d88b03f51704d99a5156a573902&units=metric : units=metric을 사용해 측정단위를 미터법으로 설정, 20.64로 변경됨

//------------------------------------------------------

const API_KEY = "b8a72d88b03f51704d99a5156a573902"

function geoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // 1.Javascript에서 url부르기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    // 2.url에서 정보얻기
    // fetch(url) : 실제로 url로 이동할 필요 없이 Javascript가 대신 url을 불러줌 (F12>network>wifi에서 확인가능)
    // response.json() : url에 들어있는 모든 내용이 json
    fetch(url).then(response => response.json()).then(data => {
        // 어떤 데이터를 가져올건지
        // data.weather[0].main : 배열 weather의 첫번째 요소의 main 값을 가져옴
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 🔥then 추가설명
// fetch 함수는 비동기 방식으로 작동해 네트워크 요청을 수행하고 응답을 받는데 시간이 걸림
// Javascript는 비동기 작업을 처리할 때, callback 함수나 Promise 객체를 사용해야함
// then 함수는 Promise 객체를 반환하기 때문에, 여러개의 비동기 작업을 순차적으로 처리하거나 병렬적으로 처리하는데 유용
// 따라서 then 함수를 사용하면 fetch 함수가 완료된 후 응답 데이터를 처리하는 코드를 작성할 수 있음
// 결론! then은 비동기 작업인 fetch 함수의 결과를 처리하는 역할

function geoError() {
    console.log("Can't find your location and weather.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);