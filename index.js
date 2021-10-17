function disableDiceButtons() {
  document.getElementById("d1").disabled = true;
  document.getElementById("d2").disabled = true;
  document.getElementById("d3").disabled = true;
  document.getElementById("d4").disabled = true;
  document.getElementById("d5").disabled = true;
  document.getElementById("d6").disabled = true;
}
function enableDiceButtons() {
  document.getElementById("d1").disabled = false;
  document.getElementById("d2").disabled = false;
  document.getElementById("d3").disabled = false;
  document.getElementById("d4").disabled = false;
  document.getElementById("d5").disabled = false;
  document.getElementById("d6").disabled = false;
}
let newGame = document.getElementById("newGame");
newGame.addEventListener("click", function () {
  let score = 0;
  document.getElementById("score").innerHTML = `${score}`;
  localStorage.setItem("score", JSON.stringify(score));
  location.reload();
});
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}
let currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
let score = JSON.parse(localStorage.getItem("score"));
if (score == 0 || score == null) {
  score = 0;
  localStorage.setItem("score", JSON.stringify(score));
} else {
  score = JSON.parse(localStorage.getItem("score"));
}
toggleSwitch.addEventListener("change", switchTheme, false);
document.getElementById("score").innerHTML = `${score}`;
let value = -1;
let image = document.getElementById("two");
function call(val) {
  value = val;
  disableDiceButtons();
  document.getElementById("text").innerHTML = `${val}`;
}
document.getElementById("d2").addEventListener("click", function (event) {
  let str = "d2";
  this.style.backgroundColor = "white";
  this.style.color = "red";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});
document.getElementById("d5").addEventListener("click", function (event) {
  this.style.backgroundColor = "white";
  this.style.color = "red";
  let str = "d5";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});
document.getElementById("d4").addEventListener("click", function (event) {
  this.style.backgroundColor = "white";
  this.style.color = "red";
  let str = "d4";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});
document.getElementById("d3").addEventListener("click", function (event) {
  this.style.backgroundColor = "white";
  this.style.color = "red";
  let str = "d3";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});
document.getElementById("d1").addEventListener("click", function (event) {
  this.style.backgroundColor = "white";
  this.style.color = "red";
  let str = "d1";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});
document.getElementById("d6").addEventListener("click", function (event) {
  this.style.backgroundColor = "white";
  this.style.color = "red";
  let str = "d6";
  str = str.slice(1, 2);
  call(str);
  event.preventDefault();
});

function set() {
  location.reload();
  setTimeout(() => { }, 3000);
}
let timeLeft = 3;
disableDiceButtons();
timeLeft=9;
let flag = false;
let randomInt = Math.floor(Math.random() * 6) + 1;
let timeout = setInterval( function () {
  if(!flag){  enableDiceButtons();flag=true;}
    if (timeLeft <= 0) {
      disableDiceButtons();
      document.getElementById("timer").innerHTML = " ";
      if (value == -1) {
        document.getElementById("message").innerHTML = `<span class="message1" id="forMessage"> Time's up</span>`;
      } else if (randomInt == value) {
        document.getElementById("message").innerHTML = `<span class="message1" id="forMessage">Your Guess was right!</span>`;
        document.getElementById("message").style.backgroundColor="#00B74A";
        score = JSON.parse(localStorage.getItem("score"));
        score += 10;
        document.getElementById("score").innerHTML = `${score}`;
        localStorage.setItem("score", JSON.stringify(score));
      } else if (randomInt != value && value != -1) {
        document.getElementById("message").innerHTML = `<span class="message2" id="forMessage">Your Guess was wrong!</span>`;
        document.getElementById("message").style.backgroundColor="#F93154";
        image.innerHTML = `<img src="assets/${randomInt}.jpeg" alt="" />`;
        document.getElementById("score").innerHTML = `${score}`;
      }
      if (value > -1) {
        document.getElementById(`d${value}`).style.backgroundColor = "#ff4742";
        document.getElementById(`d${value}`).style.color = "#fff";
      }
      setTimeout(set, 3000);
      clearInterval(timeout);
    } else {
      if(timeLeft<=6){
      document.getElementById("timer").innerHTML = `<span class="message1"> The dice will shuffle in ${timeLeft} seconds </span>`;
      }
      timeLeft--;
    }
}, 1000);
