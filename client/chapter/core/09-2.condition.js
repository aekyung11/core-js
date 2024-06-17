/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB : ', AandB);

// a = a && b
// a &&= b

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB : ', AorB);

// a ||= b

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false }; // { thisIsFalsy: false }

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true }; // 2

function login() {
  let userName = prompt("Who's there?");

  if (userName?.toLowerCase() === 'admin') {
    let password = prompt('Password?');
    if (password === 'TheMaster') {
      console.log('Welcome!');
    } else if (!password || password.replace(/\s*/g, '') === '') {
      console.log('Canceled');
    } else {
      console.log('Wrong password');
    }
  } else if (!userName || userName.replace(/\s*/g, '') === '') {
    console.log('Canceled');
  } else {
    console.log("I don't know you");
  }
}

// console.log(userName || 'Enter your name');

// console.log(userName ? userName : 'Enter your name');
