const setTime = function () {
  const clockContainer = document.getElementById("clock");
  const time = new Date();
  let minutes = time.getMinutes() - (time.getMinutes() % 5);
  let hour = time.getHours() % 12;
  clockContainer.className = "";
  clockContainer.classList.add("all");
  if (minutes === 0) {
    clockContainer.classList.add("oClock");
  } else if (minutes > 30) {
    minutes = 60 - minutes;
    hour += 1;
    clockContainer.classList.add("to");
  } else {
    clockContainer.classList.add("past");
  }
  hour = ((hour + 11) % 12) + 1;
  clockContainer.classList.add("hour" + hour);
  clockContainer.classList.add("offset" + minutes);
};

const init = function () {
  setTime();
  setInterval(setTime, 1000);
};

window.onload = init;
