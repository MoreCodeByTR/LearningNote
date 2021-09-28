// function timeout(ms){
//   return new Promise((resolve,reject)=>{
//     setTimeout(reject,ms,'done')
//   })
// }

// timeout(2000).then((data)=>{
//   console.log('resolve',data)
// },(data)=>{
//   console.log('reject',data)
// })

// let promise=new Promise((resolve,reject)=>{
//   console.log('prmosie')
//   resolve('name')
// })

// promise.then((data)=>{
//   console.log(data)
// },(data)=>{
//   console.log('err')
// })

// console.log('hi')

// function loadImageAsync(url){
//   return new Promise((resolve,reject)=>{
//     const image=new Image();

//     image.onload=function(){
//       resolve(image);
//     }

//     image.onerror=function(){
//       reject(new Error('Could not load image at'+url))
//     }

//     image.src=url
//   })
// }

// loadImageAsync('https://img1.baidu.com/it/u=963870570,3690182722&fm=26&fmt=auto')

const getJSON=function(url){
  const promise=new Promise((resolve,reject)=>{
    const handler=function(){
      if(this.readyState!==4){
        return;
      }
      if(this.status===200){
        resolve(this.response);
      }else{
        reject(new Error(this.statusText))
      }
    }

    const client=new XMLHttpRequest();
    client.open("GET",url);
    client.onreadystatechange=handler;
    client.responseType="json";
    client.setRequestHeader("Accept","application/json");
    client.send();

  })

  return promise
}

// getJSON('/posts.json').then((data)=>{
//   console.log('Content',data)
// },(err)=>{
//   throw new Error('test');
//   console.error('出错了',err)
// }).catch((err)=>{
//   console.log('执行了catch')
// })

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result,'result'))
//   .catch(error => console.log(error))


const someAsyncThing=function(){
  return new Promise((resolve,reject)=>{
    resolve(2)
  }
  )
}

// someAsyncThing().then(()=>{
//   console.log('everything is great')
// }).catch((err)=>{
//  console.log('err',err)
//  return new Promise((resolve,reject)=>{
//   resolve('1234')
// })
// }).then((data)=>{
//   console.log('data',data)
// })
// // setTimeout(()=>{console.log('setTimeout')},0)
// console.log('out')

// Promise.resolve('aaaa').catch(()=>{
//   console.log('error in resolve')
// }).then(data=>{
//   console.log('then',data)
// }).finally(()=>{
//   console.log('excute finally')
// })

function delayExcute(ms){
  return new Promise((resolve,reject)=>{
    console.log(ms)
    setTimeout(resolve,ms)
  })
}

Promise.all([delayExcute(300),delayExcute(2000),delayExcute(3000)]).then(()=>{
  console.log('所有的执行了')
})

Promise.race([getJSON('./delete'),new Promise((resolve,reject)=>{
  setTimeout(resolve,0,'请刷新网页')
})]).then((data)=>{
  console.log(1234)
  console.log(data)
})

let promise=new Promise((resolve,reject)=>{
  console.log('promise start')
   resolve(123)
})

async function my(){
  const value=await promise

  console.log(value)
  console.log('after await')
}

my()