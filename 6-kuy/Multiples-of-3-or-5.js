function solution(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0) arr.push(i);
    if (i % 5 === 0 && !arr.includes(i)) arr.push(i);
  }
  return arr.reduce((acc, item) => acc +item, 0)
}
