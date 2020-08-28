const degArray = [
  4060,
  6070,
  5070,
  6040,
  7040,
  6060,
  7060,
  5030,
  5050,
  8100,
  4090,
  4050,
  1,
  8080,
  6050,
  5030,
];
/* 
  Khare sir   4060
  Kunal sir    1
  Anant sir    5070
  Jakhmola sir  6040
  Kumar Rohit Sir  7040
  Siddhartha Sir 1
  Ishneet Maam 7060
  Rahul Sir    5030
  VAshu Sir   5050
  Shobhit Sir   8100
  Abhishek Sir   9210
  Shubham Sir   4050
  Pulkit Sir    1
  Ayush Srivastava  1
  Sharad Sir  1
  Rahul Sir   5030
*/
const taskArray = [
  "Give introduction of yourself replacing a word by another word (given by the audience) or making a sound.",
  "Explain a 5 year old how he came into this world",
  "Name 10 brands of alcohol",
  "Wear lipstic for the rest of the farewell party/ Join your eyebrows with kajal for the rest of the party",
  "Online tutorial how to make a joint (with paper and sugar)",
  "Propose someone right now",
  "Sing a romantic song in angry tone",
  "Prank someone on call (mimic oggy) (prank decided by us)",
  "Show your account balance",
  "Open up about your love life",
  "Post a story on insta the image and the details will be given by the rest of the team",
  "Dance on a song while 40 people watching you",
  "Open the gallery and scroll through with screen sharing",
  "Tell something that u have done in college and none of us knows about it",
  "Mimic Jakhmola sir",
  "Power to give any dare to anyone else",
];
let i = 0;
(function () {
  i = localStorage.getItem("counter") || i;
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");
  const getTask = document.querySelector(".get-task");
  const displayTask = document.querySelector(".display-task");

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
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    let actualDeg = degArray[i] % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });

  getTask.addEventListener("click", () => {
    let index = (displayTask.innerText = `${taskArray[i]}`);
  });
})();
