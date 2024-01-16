// debounce.js를 실행하려면 export를 삭제해야 합니다
// 실행 후 다시 export를 넣어주세요

export function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);
run('a');
run('b');
run(2);
// 100ms 이후
// 2
