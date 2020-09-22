const languages = ["De", "No", "Eng"];
const offsets = {
  De: 15,
  No: 15,
  Eng: 30,
};

const setTimeForLanguage = function (language, hour, minutes) {
  const clockContainer = document.getElementById("clock" + language);

  clockContainer.className = "";
  clockContainer.classList.add("all");
  clockContainer.classList.add("hour" + (hour + (minutes > offsets[language])));
  clockContainer.classList.add("offset" + minutes);
};

const setTime = function () {
  const time = new Date();
  const minutes = time.getMinutes() - (time.getMinutes() % 5);
  const hour = ((time.getHours() + 11) % 12) + 1;

  const currentLanguage = document.getElementById("languageSelect").value;
  setTimeForLanguage(currentLanguage, hour, minutes);
};

const setLanguage = function (language) {
  for (const oldLanguage of languages) {
    document.body.classList.remove("show" + oldLanguage);
  }
  document.body.classList.add("show" + language);
};

const changeLanguage = function (event) {
  setLanguage(event.target.value);
  setTime();
};

const initLanguage = function () {
  let language = new URLSearchParams(window.location.search).get("language");
  language =
    language &&
    language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();
  if (!languages.includes(language)) {
    language = languages[Math.floor(Math.random() * 3)];
  }
  document.getElementById("languageSelect").value = language;

  setLanguage(language);

  document
    .getElementById("languageSelect")
    .addEventListener("change", changeLanguage);
};

const init = function () {
  initLanguage();
  setTime();
  setInterval(setTime, 1000);
};

window.onload = init;
