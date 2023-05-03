function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    losAngelesDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //İstanbul
  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    istanbulDateElement.innerHTML = moment()
      .tz("Asia/Istanbul")
      .format("MMMM Do YYYY");
    istanbulTimeElement.innerHTML = moment()
      .tz("Asia/Istanbul")
      .format("h:mm:ss [<small>]A[</small>]");
  }
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    torontoDateElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = moment()
      .tz("America/Toronto")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function currentLocationTime() {
  //current Location
  let currentElement = document.querySelector("#current");
  let currentName = moment.tz.guess();
  let cityName = currentName.replace("_", " ").split("/")[1];
  let currentTimeElement = moment().tz(moment.tz.guess());
  currentElement.innerHTML = `
<div class="city">
<div>
<h2>${cityName}</h2>
<div class="date">${currentTimeElement.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${currentTimeElement.format(
    "h:mm:ss"
  )}<small> ${currentTimeElement.format("A")}</small>
  </div>
  </div>`;
}

function currentLocation() {
  currentLocationTime();
  setInterval(currentLocationTime, 1000);
}

function updateCity(event) {
  function updateCityTime() {
    let cityTimezone = event.target.value;
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format(
      "A"
    )}</small>
      </div>
      </div>
      <div><a href="/">Turn back to Home</a></div>
      `;
  }
  updateCityTime();
  setInterval(updateCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);
setInterval(updateCity, 1000);
let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);

currentLocation();
setInterval(currentLocation, 1000);
