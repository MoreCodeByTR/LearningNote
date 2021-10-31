# async/await
await 先执行右侧代码，执行完内部宏任务后，跳出来执行外部，在执行内部微任务，再执行后面任务，最后执行外部微任务


先执行await 之前包括右边的同步任务代码，再执行外部微任务，然后执行内部微任务，然后从内部向外开始执行await后的同步代码，setTimeout按照时间加入宏任务中

```javascript 
function timeout(ms){
  return new Promise((resolve,reject)=>{
    console.log('out timeout')
    setTimeout(()=>{
      console.log('timeout')
 
    },ms)
    resolve()
  }).then(()=>{
    console.log('timeout then')
  })
}

async function delayFunc(value,ms){
  setTimeout(()=>{console.log('delayFunc')},0)
  new Promise((resolve,reject)=>{
    console.log('out delayFunc')
    resolve('abc')
   }).then((data)=>{
     console.log(data)
   })
  await timeout(ms);
  console.log('delayFunc',value)

  return 456
}

async function myFunc(){
  setTimeout(()=>{console.log('myFunc')},100)
 new Promise((resolve,reject)=>{
  console.log('out muFunc')
  resolve('789')
 }).then((data)=>{
   console.log(data)
 })
  const result= await delayFunc('10.24',0)
  console.log('result',result)
  console.log('out muFunc 2')
}

myFunc()
```