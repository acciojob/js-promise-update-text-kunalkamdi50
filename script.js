//your JS code here. If required.
function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Update HTML element once promise resolves
delayMessage()
  .then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = message;
  })
  .catch((error) => {
    console.log("Error:", error);
  });

