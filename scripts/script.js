const degArray = [
  5030,
  4070,
  4060,
  5040,
  6070,
  5070,
  7070,
  6040,
  7040,
  6060,
  6020,
  7060,
  5030,
  5050,
  8100,
  7030,
  4090,
  4050,
  5090,
  8080,
  6050,
];
/* 
  Vaibhav
  Khare sir   4060
  Aditya       5040
  Kunal sir    1
  Anant sir    5070
  Kalpit   7070
  Jakhmola sir  6040
  Kumar Rohit Sir  7040
  Siddhartha Sir 1
  DC sir
  Ishneet Maam 7060
  Rahul Sir    5030
  VAshu Sir   5050
  Shobhit Sir   8100
  Vivek Baghela 7030
  Abhishek Sir   4090
  Shubham Sir   4050
  Pulkit Sir    1
  Ayush Srivastava  1
  Sharad Sir  1
  Rahul Sir   5030
*/
const taskArray = [
  "Power to give any dare to anyone else",
  "Choose a 4th year and have a conversation with him in a female voice on the topic- Mehangai Badh gai hai ",
  "Give introduction of yourself replacing a word by another word (given by the audience) or making a sound",
  "Talk to your pillow as it is your crush",
  "Explain a 5 year old how he came into this world",
  "Name 10 brands of alcohol",
  "Howl like a wolf twice(very loud)",
  "Wear lipstic for the rest of the farewell party/ Join your eyebrows with kajal for the rest of the party",
  "Online tutorial how to make a joint (with paper and sugar)",
  "Propose someone right now",
  "Call the person who is on top of your call list and wish him a happy birthday for 5 mins until he/she says thank you",
  "Sing a romantic song in angry tone",
  "Prank someone on call (mimic oggy) (prank decided by us)",
  "Show your account balance",
  "Open up about your love life",
  "Give a suitable word for each of the teammamte",
  "Post a story on insta the image and the details will be given by the rest of the team",
  "Dance on a song while 40 people watching you",
  "Open the gallery and scroll through with screen sharing",
  "Tell something that u have done in college and none of us knows about it",
  "Mimic Jakhmola sir",
];
let i = 0;
(function () {
  i = localStorage.getItem("counter") || i;
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".spin-button");
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
