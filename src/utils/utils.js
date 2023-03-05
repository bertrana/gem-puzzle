export function generateArrayOfNumbers(size) {
  let arr = [];

  for (let i = 0; i < size ** 2; i++) {
    arr.push(i);
  }
  arr.sort((a, b) => (Math.random() * 1.5  - 1 ));
  return arr;
}