const timer = () => {
  let number = 0;
  setInterval(displayText, 1000);
  function displayText() {
    let text = document.querySelector("p");
    text.textContent = `Obecnie przebywasz na mojej stronie ${number} sekund`;
    text.style.fontSize = "24px";
    number++;
  }
  return displayText;
};

const start = timer();
start();

// const clock = () => {
//   let seconds = 0;
//   document.body.textContent = 0 + " sekund";

//   const timer = () => {
//     seconds++;
//     document.body.textContent = seconds + " sekund";
//   };
//   return timer;
// };

// const start = clock();

// setInterval(start, 1000);
