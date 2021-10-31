async function async1() {
  console.log( 'async1 start' )
  await async2()
  console.log( 'async1 end' )
}
async function async2() {
  console.log( 'async2' )

  new Promise((resolve)=>{
    console.log('async2 start')
    setTimeout(()=>{console.log('settimeout')},0)
    resolve()
  }).then(()=>{
    console.log('async2 then')
  })
}
async1()
console.log( 'script start' )
new Promise((resolve)=>{
  console.log('async3 start')
  resolve()
}).then(()=>{
  console.log('async3 then')
})
//async1 start
//async2
//async2 start
//script start
//async3 start
//async2 then
//async1 end
//async3 then
//settimeout