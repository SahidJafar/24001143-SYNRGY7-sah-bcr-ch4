class App {
    constructor() {
      this.carContainerElement = document.getElementById("cars-container");
      this.notFoundContainerElement = document.getElementById("notfound-container");
      this.searchBtn = document.getElementById("search-btn");
      this.driverType = document.getElementById("driver-type");
      this.totalPassanger = document.getElementById("total-passenger");
      this.date = document.getElementById("date");
      this.pickUpTime = document.getElementById("pickup-time");
    }
  
    async init() {
      await this.load();
  
      this.searchBtn.onclick = () => {
        this.clear();
        this.search();
      };
    }
  
    search = () => {
      const date = this.date.value;
      const time = this.pickUpTime.value;
      if (date === "" || time === "") {
        alert("Please fill the date or time!");
        return;
      }
      const dateTime = new Date(`${date}T${time}Z`);
      console.log(dateTime);
  
      const driverType = this.driverType.value;
      let totalPassanger = this.totalPassanger.value;
      let cards = "";
  
      if (totalPassanger === "") totalPassanger = 0;
      if (driverType === "dengan-sopir") totalPassanger++;
  
      console.log(totalPassanger);
  
      const filteredCars = Car.list.filter(
        (car) =>
          car.available &&
          car.availableAt <= dateTime &&
          car.capacity >= totalPassanger
      );
  
      console.log(filteredCars);
  
      if (filteredCars.length === 0) {
        this.notFoundContainerElement.innerHTML = `
        <div class="flex justify-center items-center w-full h-full mt-10">
          <h1 class="text-4xl font-bold text-center">Opps! Car Not found</h1>
        </div>`;
      } else {
        filteredCars.forEach((car) => {
          cards += car.render();
          this.carContainerElement.innerHTML = cards;
          feather.replace();
        });
      }
    };
  
    async load() {
      const cars = await Binar.listCars();
      Car.init(cars);
    }
  
    clear = () => {
      let child = this.carContainerElement.firstElementChild;
      this.notFoundContainerElement.innerHTML = "";
  
      while (child) {
        child.remove();
        child = this.carContainerElement.firstElementChild;
      }
    };
  }
  