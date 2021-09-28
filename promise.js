var arr='1234567'||[12,34,56,78,96]

for (let item of arr){
  console.log(item)
}

let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

console.log(iterator.next()) // { value: 1, done: false }