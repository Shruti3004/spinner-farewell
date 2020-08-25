(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  let deg = 0;

  startButton.addEventListener("click", () => {
    startButton.style.pointerEvents = "none";
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = "all 10s ease-out";
    wheel.style.transform = `rotate(${deg}deg)`;
    // wheel.classList.add('blur');
  });

  wheel.addEventListener("transitionend", () => {
    // wheel.classList.remove('blur');
    startButton.style.pointerEvents = "auto";
    wheel.style.transition = "none";
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
