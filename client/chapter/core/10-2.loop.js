/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let i = 0;

// do {
//   console.log(i);

//   if (i === 3) {
//     console.log('3번 입니다.');
//   }

//   i++;
// } while (i < 5);

// let i = prompt('How many times are you gonna try?');

// do {
//   console.log(i);

//   if (i < 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }

//   i--;
// } while (i);

// do ~ while 문 (순환)

let count = 0;

// do {
//   console.log(count++);
// } while (i--);
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');

console.log(first);
// document: HTML문서를 js에서 document라 부름.

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

function next(curr) {
  if (typeof curr === 'string') {
    curr = document.querySelector(curr);
  }
  do {
    curr = curr.nextSibling;
  } while (curr.nodeType !== 1);
  return curr;
}

const second = next('.first');
console.log(second);

function prev(curr) {
  if (typeof curr === 'string') {
    curr = document.querySelector(curr);
  }
  do {
    curr = curr.previousSibling;
  } while (curr.nodeType !== 1);
  return curr;
}

console.log(prev('.second'));

// first의 다음 요소 선택 => .second
// first.nextElementSibling;
