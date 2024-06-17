/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

[1000, 5000, 2500].forEach(function () {});

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사배열 이라 불리는 지역변수
  let total = 0;

  // for 문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for..for 문
  // for(let value of arguments){
  //   total += value;
  // }

  // console.log(arguments);

  // arguments => array
  const arr = [...arguments];
  // const arr = Array.from(arguments)
  // const arr = Array.prototype.slice.call(arguments);

  // console.log( arr );

  // forEach
  // arr.forEach(function(price){
  //   total += price;
  // })

  // arr.forEach(price => total += price)

  // reduce
  // const result = arr.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  // const result = arr.reduce((acc, cur) => acc + cur, 0);

  // 빌려쓰기
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item;
  // });

  // 태생을 배열로 바꾸기(부모 바꿔치기)
  arguments.__proto__ = Array.prototype;

  // console.log(arguments);

  return total;
};

// let calculateTotal2 = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

const result = calculateTotal(1000, 5000, 2500, 4000, 2300);

// console.log(result);

// forEach => 배열 순환 o, 값 변환 x;
// reduce  => 배열 순환 o, 값 반환 o; 숫자/문자/배열/객체
// map     => 배열 순환 o, 값 반환 o; only 배열, 원본을 훼손하지 않는다.
// filter  => 배열 순환 o, 값 반환 o; only 배열

const arr = [10, 100, 1000];
const mapValue = arr.map(function (item, index) {
  return item * 2;
});

console.log(mapValue);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let callbackFunctionExpression = function (isActive, success, fail) {
  isActive;

  success();
  fail();
};

callbackFunctionExpression(
  false,
  function () {
    console.log('성공입니다!');
  },
  function () {
    console.log('실패입니다...');
  }
);

function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url);
  } else {
    fail();
  }
}

movePage(
  'https://www.naver.com',
  function (url) {
    // console.log('정확한 url을 입력했습니다. 3초 뒤 해당 사이트로 이동합니다.');
    console.log(
      `현재 입력하신 url은 ${url} 입니다. 3초 뒤 해당 사이트로 이동합니다.`
    );
    // location.href = url;
  },
  function () {
    console.log('잘못된 url을 입력하셨습니다.');
  }
);

// higher-order function 고차함수
function map(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }

  return result;
}
// 함수를 인수로 받아 처리함.
// 함수를 리턴함

// 클로저 함수
function greater(n) {
  return function (m) {
    return n > m;
  };
}

const g = (n) => (m) => n > m;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// var은 블록 스코프 : x
// var은 함수 스코프 : o

// encapsulation (캡슐화) -> 유지보수의 목적/코드의 안정성을 위함
// 모듈 프로그래밍 => import, export

// 즉시실행함수는 매개변수를 받을 수 있나요? window로 받아서 tiger로.

const MASTER = (function (tiger) {
  let uuid = 'azxcqwASFqjKJ112314!23';

  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})(window);

const css = (function () {
  function setStyle(node, prop, value) {}
  function getStyle(node, prop) {}
  function css(node, prop, value) {}

  return css;
})();

// 클로저 함수의 closure,, -> 뭐요?
// 클로저는 자바스크립트에서 매우 중요한 개념이라서 지금 당장 이해 안되어도 꼭 면접 전에 개념을 잡고 가시길 추천드립니다

const people = [
  {
    nickName: 'tiger',
    age: 40,
  },
  {
    nickName: 'beom',
    age: 45,
  },
  {
    nickName: 'seon',
    age: 20,
  },
];

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`;
}, '');

// document.body.insertAdjacentHTML('beforeend', template);
