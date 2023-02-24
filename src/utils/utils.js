export function generateArrayOfNumbers() {
  let arr = [];

  for (let i = 0; i < this.size ** 2; i++) {
    arr.push(i);
  }
  arr.sort((a, b) => (Math.random() * 1.5  - 1 ));
  return arr;
}