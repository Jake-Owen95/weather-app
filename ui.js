class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "London&units=metric";
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h2 class="card-title">${data.name} ${data.main.temp}°C</h5>
                  <h6 class="temp-min-max">Min ${data.main.temp_min} || Max ${data.main.temp_max}</h6>
                  <p class="card-text "> ${data.clouds.all}% cloudy</p>
                  <div class="weather-icon"><img src="icons/unknown.png" /></div>
                  <p class="card-text "> ${data.weather[0].main}</p>
                  
              </div>
          </div>
          
          
          `;
          let locationIcon = document.querySelector('.weather-icon');
          const {icon} = data.weather[0];
          locationIcon.innerHTML = `<img src="icons/${icon}.png">;`;
          
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }