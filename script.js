//your JS code here. If required.
// function delayMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello, world!");
//     }, 1000);
//   });
// }

// // Update HTML element once promise resolves
// delayMessage()
//   .then((message) => {
//     const outputElement = document.getElementById("output");
//     outputElement.textContent = message;
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

const promise = new Promise((resolve, reject) =>{ 
  setTimeout(()=>{
    resolve("Hello, World!")
  } ,1000)
})

const showMassege = (message) => {
  const output = document.getElementById("output")
  output.textContent = message;
}

promise.then(showMassege);