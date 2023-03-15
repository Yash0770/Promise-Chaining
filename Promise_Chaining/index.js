//PROMISE CHAINING

let p1 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
  console.log("Resolve after 2 second")
  },2000)
  resolve(21)
})

p1.then((value)=>{
  console.log(value)
  let p2 = new Promise((resolve)=>{
    console.log("new promise recall")
  })
  return p2
})

// .then((value)=>{
//     console.log(value);
// }).then((value)=>{
//     console.log(value);
// })


//SAME WITH LOADSCRIPT 

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//       let script = document.createElement("script")
//       script.type = "text/javascript"
//       script.src = src
//       document.body.append(script)
  
//       script.onload = () => {
//         resolve(1)
//       }
//       script.onerror = () => {
//         reject(0)
//       }
//     })
//   }
  
//   let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
  
//   p.then((value) => {
//     console.log(value)
//   }).catch((error) => {
//     console.log("Error occur")
//   })