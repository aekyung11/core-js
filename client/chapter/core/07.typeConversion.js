/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;
console.log(String(YEAR)); // 명시적 형변환
console.log(YEAR + ''); // 암시적 형변환

// undefined, null
let days = null;
console.log(String(days));
console.log(days + '');

let friends;
console.log(String(friends));
console.log(friends + '');

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let isMarried = true;
console.log(Number(isMarried));

// string
let num = '100';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);

// numeric string
const width = '120.5px';
console.log(Number(width));
console.log(parseInt(width, 10));
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean('0'));

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
