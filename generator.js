function* demo() {


  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}

var d=demo()
console.log(d.next())
console.log(d.next())
console.log(d.next())