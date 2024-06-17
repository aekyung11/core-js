/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;
console.log(typeof empty); // object가 나오는데 이것은 자바스크립트 자체의 오류임

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello';
const single = 'hello';
const backtick = `hello ${10 + 5}`;
console.log(typeof double);
console.log(typeof single);
console.log(typeof backtick);

const str = new String('hello');
console.log(typeof str); // object. 문자같이 생긴 객체. String 생성자 함수(constructor function)를 사용하여 문자열 객체를 만든다.
// 근데 모든 문자열은 깊게 파고들면 결국에는 객체임 (응?) 'hello'.toUpperCase()가 가능한 걸 생각해보면 댐

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.5;
console.log(typeof integer);
console.log(typeof floatingPointNumber);

console.log(typeof Infinity); // number

const num = new Number(150);
console.log(typeof num); // object

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(typeof bigInt); //bigint

const b = BigInt(111);
console.log(typeof b); // bigint

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;
console.log(typeof isActive); //boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.clear();
const obj = { name: 'tiger' }; // object literal
console.log(typeof obj); //object

const object = new Object({ name: 'aekyung' }); // constructor function
console.log(typeof object); //object

// 8. 고유한 식별자(unique identifier)
const id = Symbol('uuid');
console.log(typeof id); // symbol

const id2 = Symbol('uuid');
console.log(typeof id2); //symbol

// id === id2 -> false

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

console.clear();

// Object
const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {
    // sum이라는 method를 가질 수 있게 함.
    return a + b;
  },

  // 1. normal function
  sayHi: function () {
    return 'Hello';
  },

  // 2. arrow function. return this 시 Window를 가리킴. this 바인딩 안 함.
  sayHi2: () => {
    return 'Hello';
  },

  // normal vs arrow : prototype의 포함 여부

  // 3. concise method. 가장 자주 씀. return this 시 user를 가리킴.
  sayHi3() {
    return 'Hello';
  },
};
console.log(typeof user); //object
// console.log(user); //object

// Array
const arr = [
  10,
  100,
  1000,
  null,
  undefined,
  'hello',
  { name: 'tiger' },
  function () {},
];
console.log(arr);

const newArray = new Array(1, 2, 3);
console.log(newArray);

// function
function sum(a, b) {
  console.log(a + b); // NaN (sum();일 때. 괄호 안에 값이 들어가면 결과값 반환)
}
sum();

// this
