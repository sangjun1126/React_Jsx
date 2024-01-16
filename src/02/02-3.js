//var array1 = ['one', 'two'];
//var array2 = ['three', 'four'];
//var combined = [array1[0], array1[1], array2[0], array2[1]];
//var combined = array1.concat(array2);
//var combined = [].concat(array1, array2);
//var first = array1[0];
//var second = array1[1];
//var three = array1[2] || 'empty';
//function func() {
//  var args = Array.prototype.slice.call(arguments);
//  var first = args[0];
//  var others = args.slice(1, args.length);
//  console.log(args);
//  console.log(first);
//  console.log(others);
//}

//console.log(array1);
//console.log(array2);
//console.log(combined);
//console.log(first);
//console.log(second);
//console.log(three);

// ES6 전개 연산자를 도입

//var array1 = ['one', 'two'];
//var array2 = ['three', 'four'];
//const combined = [...array1, ...array2];
//const [first, second, three = 'empty', ...others] = array1;
//function func(...args) {
//  var [first, ...others] = args;
//}

//console.log(array1);
//console.log(array2);
//console.log(combined);
//console.log(first);
//console.log(second);
//console.log(three);
//console.log(others);

//var objectOne = { one: 1, two: 2, other: 0 };
//var objectTwo = { three: 3, four: 4, other: -1 };
//var combined = {
//  one: objectOne.one,
//  two: objectTwo.two,
//  three: objectTwo.three,
//  four: objectTwo.four,
//};
//var combined = Object.assign({}, objectOne, objectTwo);
//var combined = Object.assign({}, objectTwo, objectOne);
//var others = Object.assign({}, combined);
//delete others.other;

//console.log(objectOne);
//console.log(objectTwo);
//console.log(combined);
//console.log(others);

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo,
};

var combined = {
  ...objectTwo,
  ...objectOne,
};

var { other, ...others } = combined;

console.log(objectOne);
console.log(objectTwo);
console.log(combined);
console.log(other);
