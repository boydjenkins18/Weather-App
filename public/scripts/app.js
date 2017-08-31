if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let api =
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
      lat +
      "&lon=" +
      lon;
    let request = new XMLHttpRequest();
    request.open("GET", api);
    request.responseType = "json";
    request.send();
    request.onload = () => () => {
      let data = request.response;
      let lis = document.querySelectorAll("li");
      let location = document.querySelector("li");
      const [tempCel, tempFah, windSpeed, description] = lis;

      let img = document.querySelector("img");
      let convert = data.main.temp * 9 / 5 + 32;

      location.textContent = data.name + ", " + data.sys.country;
      tempCel.innerHTML = data.main.temp + " ";
      tempFah.innerHTML = convert.toFixed() + " ";
      windSpeed.textContent = data.wind.speed + " m/s";
      description.textContent =
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1);
      img.setAttribute("src", data.weather[0].icon);
    };
    let change = document.querySelectorAll("a");
    let celcel = document.querySelector(".celcel");
    let fahfah = document.querySelector(".fahfah");
    change[0].addEventListener("click", () => {
      fahfah.classList.toggle("fahfah");
      celcel.classList.toggle("celHide");
    });
    change[1].addEventListener("click", () => {
      fahfah.classList.toggle("fahfah");
      celcel.classList.toggle("celHide");
    });
  });
}
