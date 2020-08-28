const degArray = [4060, 5040, 6040, 7040, 8050, 9140];
/*
  Rohit Jhakmola 6040 (task 3)
  Shobhit Aggarwal  9140
  Ayush Khare/Srivastava 4060 (task 1)
  Anant Jain 5070
  Kunal Vishnoi
  Rahul Singh 5030
  Abhishek   9210 (task 5)
  Ishneet Kaur 7060
  Rohit Kumar 7040 (task 4)
  vasu Mehra 5050
*/
const taskArray = [
  "Give introduction of yourself replacing a word by another word (given by the audience) or making a sound.",
  "Task2",
  "Wear lipstic for the rest of the farewell party/ Join your eyebrows with kajal for the rest of the party",
  "Online tutorial how to make a joint (with paper and sugar)",
  "Post a story on insta the details and image will be given by the rest of the team.",
  "Task6",
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
