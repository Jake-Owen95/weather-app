class Fetch {
    async getCurrent(input) {
      const myKey = "94b12357324404181f801d79d1cf815b";
      
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
      );
  
      const data = await response.json();
    
      console.log(data);
  
      return data;
    }
  }