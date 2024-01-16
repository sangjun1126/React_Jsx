// ES6에서의 화살표 함수(arrow function)

//function add (first, second) {
//    return first + second;
//}

//var add = function(first, second) {
//    return first + second
//};

// ES6 화살표 함수를 사용해보기
// var add = (first,second) => {
//    return first + second
//};

//var add = (first, second) => first + second;
//var addAndMultiple = (first, second) => ({add : first + second, multiply : first * second});

// 위의 코드를 계단형 함수 선언식으로 바꿔보기
// function addNumber(num) {
//  return function (value) {
//    return num + value;
//  };
//}

// var addNumber = (num) => (value) => num + value;

class myClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}
