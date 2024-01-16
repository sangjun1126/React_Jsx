//function parse(qs) {
//  var queryString = qs.substr(1);
//  var chunks = qs.split('&');
//  var result = {};

//  for (let i = 0; i < chunks.length; i++) {
//    var parts = chunks[i].split('=');
//    var key = parts[0];
//    var value = parts[1];
//    result[key] = value;
//  }
//  return result;
//}

// 위의 코드를 숫자로 변환시키기

//function parse(qs) {
//  var queryString = qs.substr(1);
//  var chunks = qs.split('&');
//  var result = {};

//  for (let i = 0; i < chunks.length; i++) {
//   var parts = chunks[i].split('=');
//    var key = parts[0];
//    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//    result[key] = value;
//  }
//  return result;
//}

// ES6의 forEach 함수 사용하기

//function parse(qs) {
//  const queryString = qs.substr(1);
//  const chunks = queryString.split('&');
//  let result = {};
//  chunks.forEach((chunk) => {
//    const parts = chunk.split('=');
//    const key = parts[0];
//    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
//    result[key] = value;
//  });

//  return result;
//}

// map 함수 사용해보기

//function parse(qs) {
//  const queryString = qs.substr(1);
//  const chunks = qs.split('&');
//  const result = chunks.map((chunk) => {
//    const [key, value] = chunk.split('=');
//    return { key: key, value: value };
//  });
// return result;
//}

// reduce 메서드 사용하기
function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}
