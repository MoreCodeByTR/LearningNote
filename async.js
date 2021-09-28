let promise=new Promise((resolve,reject)=>{
  console.log('promise start')
   resolve(123)

   
})

async function my(){
  const value=await promise

  console.log(value)
  console.log('after await')

  return 456
}

my().then((data)=>{
  console.log('data',data)
})