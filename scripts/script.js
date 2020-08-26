const degArray = [20, 30, 40];
let i = 0;
(function () {
  i = localStorage.getItem("counter") || i;
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  let deg = 0;

  startButton.addEventListener("click", () => {
    localStorage.setItem("counter", ++i);
    if (i === degArray.length) {
      localStorage.setItem("counter", 0);
      i = 0;
    }
    startButton.style.pointerEvents = "none";
    //deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = "all 5s ease-out";
    wheel.style.transform = `rotate(${degArray[i]}deg)`;
    // wheel.classList.add("blur");
  });

  wheel.addEventListener("transitionend", () => {
    // wheel.classList.remove("blur");
    startButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";
    let actualDeg = degArray[i] % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
