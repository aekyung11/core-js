/* ---------------- */
/* Condition        */
/* ---------------- */

const result = prompt('자바스크립트의 "공식" 이름은 무엇일까요?', '');

if (result === 'ECMAScript') {
  console.log('정답입니다!');
} else {
  console.log('모르셨나요? 정답은 ECMAScript입니다!');
}

function watchingMovie() {
  // 그 영화 봤니?
  //     ↓
  // Yes | No
  //     | 영화 볼거니?
  //           ↓
  //       Yes | No

  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    console.log('글쿤');
  } else {
    // 영화 볼거니?
    let goingToWatchMovie = confirm('영화 볼거니?');
    if (goingToWatchMovie) {
      let withWho = prompt('누구랑?', '');

      if (withWho === 'you') {
        console.log('심쿵');
      } else {
        console.log('나랑 또 봐.');
      }
    } else {
      console.log('그래');
    }
  }
}

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const message =
  didWatchMovie === 'yes'
    ? '그 영화 참 재밌더라'
    : goingToWatchMovie === 'yes'
      ? '언제볼래?'
      : 'okay bye...';
// didWatchMovie.includes('yes') ? '그 영화 참 재밌더라' : '다음에 같이 볼래?';

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? 'Hi!' : 'Goodbye!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}
