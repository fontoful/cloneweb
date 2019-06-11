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

  if (hour < 12) {
    // morning
    document.body.style.backgroundColor = "yellow";
    greeting.textContent = "Good morning";
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundColor = "red";
    greeting.textContent = "Good afternoon";
  } else {
    greeting.textContent = "Good evening";
    document.body.style.backgroundColor = "lightblue";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

showTime();
setBgGreet();
getName();
