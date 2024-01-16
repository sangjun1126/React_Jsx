//let num = 1;
//num = num * 3;
//let str = '문자';
//str = '다른 문자';
//let arr = [];
//arr = [1, 2, 3];
//let obj = {};
//obj = { name: '새 객체' };

//console.log(num);
//console.log(str);
//console.log(arr);
//console.log(obj);

// 불변 변수 const 사용 오류 예시
//const num = 1;
//num = 3; // const 는 불변 변수이기 때문에 자료형 오류가 발생해요
//const str = '문자';
//str = '새 문자';
//const arr = [];
//arr = [1, 2, 3];
//const obj = {};
//obj = { name: '내 이름' };

// 참조 변수에는 const 변경이 용이하다 (객체, 배열, 함수)
//const arr2 = [];
//arr2.push(1);
//console.log(arr2);
//arr2.splice(0, 0, 0);
//console.log(arr2);
//arr2.pop();
//console.log(arr2);
//const obj2 = {};
//obj2['name'] = '내 이름';
//console.log(obj2);
//Object.assign(obj2, { name: '새이름' });
//delete obj2.name;
