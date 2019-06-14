const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus");

//   show time

const showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  //  12 hr format

  hour = hour % 12 || 12;

  // output time

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
};

// Add Zeros

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and greeting

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();

  const domStyle = document.body.style;

  if (hour < 12) {
    // morning
    domStyle.backgroundImage = "url('../images/morning.jpg')";
    domStyle.backgroundRepeat = "no-repeat";
    domStyle.backgroundPosition = "center";
    greeting.textContent = "Good morning";
  } else if (hour < 18) {
    // afternoon
    domStyle.backgroundImage = "url('../images/afternoon.jpg')";
    domStyle.backgroundPosition = "center";
    domStyle.backgroundRepeat = "no-repeat";
    domStyle.backgroundSize = "cover";
    domStyle.color = "#fff";
    greeting.textContent = "Good afternoon";
  } else {
    greeting.textContent = "Good evening";
    domStyle.backgroundImage = "url('../images/evening.jpg')";
    domStyle.backgroundPosition = "center";
    domStyle.backgroundRepeat = "no-repeat";
    domStyle.color = "#fff";
    domStyle.backgroundSize = "cover";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
