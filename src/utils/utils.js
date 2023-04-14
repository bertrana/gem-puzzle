export function generateArrayOfNumbers(size) {
  let arr = [];
  let doubleArray = [];

  for (let i = 0; i < size ** 2; i++) {
    arr.push(i);
  }
  arr.sort((a, b) => (Math.random() * 1.5  - 1 ));

  for (let i = 0; i < size; i++) {
    doubleArray[i] = [];
    for (let j = 0; j < size; j++) {
      doubleArray[i].push(arr[i * j + j]);   
    }
  }

  console.log(arr);
  console.log(doubleArray);
  return arr;
}