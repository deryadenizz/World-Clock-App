function showSelectedCityTime(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      let parisTime = moment()
        .tz("Europe/France")
        .format("[It is currently] dddd, MMMM D,YYYY LT [in Paris,France]");
      alert(parisTime);
    }
    if (event.target.value === "rome") {
      let romeTime = moment()
        .tz("Europe/Rome")
        .format("[It is currently] dddd, MMMM D,YYYY LT [in Rome,Italy]");
      alert(romeTime);
    }
    if (event.target.value === "tokyo") {
      let tokyoTime = moment()
        .tz("Asia/Tokyo")
        .format("[It is currently] dddd, MMMM D,YYYY LT [in Tokyo,Japan]");
      alert(tokyoTime);
    }
  }
}

let citySelect = document.querySelector("#country");
citySelect.addEventListener("change", showSelectedCityTime);
//Los Angeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
//İstanbul
setInterval(function () {
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  istanbulDateElement.innerHTML = moment()
    .tz("Asia/Istanbul")
    .format("MMMM Do YYYY");
  istanbulTimeElement.innerHTML = moment()
    .tz("Asia/Istanbul")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
//Toronto
setInterval(function () {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  torontoDateElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("MMMM Do YYYY");
  torontoTimeElement.innerHTML = moment()
    .tz("America/Toronto")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
