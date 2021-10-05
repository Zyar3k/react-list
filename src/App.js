import { useState } from "react";
import "./App.css";

const data = [
  { id: "1", brand: "Ford", model: "Sierra", year: 1980 },
  { id: "2", brand: "Mitsubishi", model: "Lancer", year: 1980 },
  { id: "3", brand: "Subaru", model: "Impreza", year: 1990 },
];
console.log("🚀 ~ file: App.js ~ line 9 ~ data", data);

function App() {
  const [cars, setCars] = useState(data);

  const handleDeleteCar = (e) => {
    const id = e.target.id;
    console.log(typeof id);
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <div className="App">
      <h1>Cars</h1>
      <div>
        <label>
          Brand
          <input type="text" placeholder="brand" />
        </label>
        <label>
          Model
          <input type="text" placeholder="model" />
        </label>
        <label>
          Year
          <input type="text" placeholder="year" />
        </label>
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Func</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>
                <button>EDIT</button>
                <button id={car.id} onClick={(e) => handleDeleteCar(e)}>
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
