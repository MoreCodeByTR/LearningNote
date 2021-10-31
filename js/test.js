async function async1() {
  console.log( 'async1 start' ) // 1
await async2()
  console.log( 'async1 end' ) //5
}
async function async2() {
  console.log( 'async2' ) //2
  new Promise( function ( resolve ) {
    console.log( 'promise3' ) //3
   setTimeout(()=>{ resolve()},0)
  } ).then( function () {
    console.log( 'promise4' ) //6
  } )
}
console.log( 'script start' )  // 0
setTimeout( function () {
  console.log( 'setTimeout' ) //7
}, 0 )
async1();
new Promise( function ( resolve ) {
  console.log( 'promise1' ) //3
  resolve();
} ).then( function () {
  console.log( 'promise2' ) //6
} )
console.log( 'script end' ) //4

// script start
// script end


