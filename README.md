# Binar: Challenge 04

- Mulai modifikasi file `server/index.js` apabila ingin membuat HTTP server.
- Mulai modifikasi folder `public` apabila ingin memodifikasi HTML.

# `Binar` class

Class ini berisi 1 static method saja, yang berfungsi untuk mengambil data mobil dari internet.

```typescript
interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

interface Binar {
  listCars(filterer: (car: Car) => boolean): Array<Car>
}
```

Method `listCars` ini akan menerima fungsi yang mana harus mengembalikan `boolean` sebagai nilainya. 
Fungsi ini akan dijalankan untuk masing-masing item di dalam list of cars, yang mana jika nilainya `true`,
maka akan ditampilkan di dalam list tersebut.

# Tips

Just, hack it bro!

<h1 align="center">Chapter 4 Using Node.js HTTP Server 👋</h1>

## Installation
💾 for install node modules  
`npm install`

## Usage
💻   Run the project:
`npm run start`

