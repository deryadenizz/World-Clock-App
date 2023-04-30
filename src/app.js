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
