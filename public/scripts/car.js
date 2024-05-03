class Car {
    static list = [];
  
    static init(cars) {
      this.list = cars.map((i) => new this(i));
    }
  
    constructor({
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    }) {
      this.id = id;
      this.plate = plate;
      this.manufacture = manufacture;
      this.model = model;
      this.image = image;
      this.rentPerDay = rentPerDay;
      this.capacity = capacity;
      this.description = description;
      this.transmission = transmission;
      this.available = available;
      this.type = type;
      this.year = year;
      this.options = options;
      this.specs = specs;
      this.availableAt = availableAt;
    }
  
    render() {
      return `
        <div class="flex flex-col w-[333px] mx-auto p-6 bg-white border rounded-lg shadow-sm">
        <div class="w-full h-56  md:w-72 mb-3" style="
          background: url(${this.image});
          background-size: cover;
          background-position: center;
        "></div>
        <p class="font-semibold text-sm mb-2">${this.manufacture} ${this.model}</p>
        <p class="font-bold text-base mb-2">Rp ${this.rentPerDay} / hari</p>
        <p class="font-light text-sm mb-3">${this.description}</p>
        <ul class="font-light text-sm leading-2 flex flex-wrap gap-4 mb-6">
          <li class="flex w-full items-center">
            <i data-feather="users" class="text-neutral-03 stroke-[1px] mr-2"></i>
            ${this.capacity} orang
          </li>
          <li class="flex w-full items-center">
            <i data-feather="settings" class="text-neutral-03 stroke-[1px] mr-2"></i>
            ${this.transmission}
          </li>                
          <li class="flex w-full items-center">
            <i data-feather="calendar" class="text-neutral-03 stroke-[1px] mr-2"></i>
            Tahun ${this.year}
          </li>
        </ul>
        <button class="bg-limegreen w-full h-12 font-bold text-sm text-white mt-auto">Pilih Mobil</button>
      </div>
      `;
    }
  }
  