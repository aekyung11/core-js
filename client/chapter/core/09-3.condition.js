/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 100;

switch (a) {
  case 10:
    console.log("it's 10!");
    break;

  case 11:
    console.log("it's 11!");
    break;

  case 12:
    console.log("it's 12!");
    break;

  default:
    console.log("There's no 10, 11, 12 here");
}

/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

console.clear();

// 변수에 담는다 => prompt 통해서 숫자를 입력받는다. (0~6까지)

// switch case 문을 사용해서

// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토

// let day = prompt('Enter the number between 0 to 6');

// switch (day) {
//   case 0:
//     console.log("It's Sunday");
//     break;

//   case 1:
//     console.log("It's Monday");
//     break;

//   case 2:
//     console.log("It's Tuesday");
//     break;

//   case 3:
//     console.log("It's Wednesday");
//     break;

//   case 4:
//     console.log("It's Thursday");
//     break;

//   case 5:
//     console.log("It's Friday");
//     break;

//   case 6:
//     console.log("It's Saturday");
//     break;

//   default:
//     console.log("Ugh, it's out of boundary");
// }

// 0~6까지 랜덤 수를 입력받기
// let value = Math.floor(Math.random() * 7);
// switch (value) {
//   case 0:
//     console.log('일');
//     break;
//   case 1:
//     console.log('월');
//     break;
//   case 2:
//     console.log('화');
//     break;
//   case 3:
//     console.log('수');
//     break;
//   case 4:
//     console.log('목');
//     break;
//   case 5:
//     console.log('금');
//     break;
//   case 6:
//     console.log('토');
//     break;
// }

console.clear();

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(num) {
  const value = getRandom(num);
  console.log('value : ', value);

  switch (value) {
    case 0:
      return '일';

    case 1:
      return '월';

    case 2:
      return '화';

    case 3:
      return '수';

    case 4:
      return '목';

    case 5:
      return '금';

    case 6:
      return '토';

    default:
      return "Ugh, it's out of boundary";
  }
}

function weekend() {
  const day = getDay(7);

  console.log(day === '토' || day === '일' ? 'Weekend!' : 'Weekdays..');

  // switch (day) {
  //   case '토':
  //   case '일':
  //     console.log('Weekend!');
  //     break;
  //   default:
  //     console.log('Weekdays..');
  // }
}

weekend();
