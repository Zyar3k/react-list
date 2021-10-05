import { useState } from "react";
import "./App.css";

const data = [
  { id: "1", brand: "Ford", model: "Sierra", year: 1980 },
  { id: "2", brand: "Mitsubishi", model: "Lancer", year: 1980 },
  { id: "3", brand: "Subaru", model: "Impreza", year: 1990 },
];

function App() {
  const [cars, setCars] = useState(data);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteCar = (e) => {
    const id = e.target.id;
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  console.log(model);

  const handleOnChangeBrand = (event) => setBrand(event.target.value);
  const handleOnChangeModel = (event) => setModel(event.target.value);
  const handleOnChangeYear = (event) => setYear(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const basicId = Math.floor(Math.random() * 9999);
    const carObject = {
      id: basicId,
      brand: brand,
      model: model,
      year: year,
    };

    const data = [...cars, carObject];
    setCars(data);
  };
  return (
    <div className="App">
      <h1>Cars</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Brand
            <input
              type="text"
              placeholder="brand"
              value={brand}
              onChange={handleOnChangeBrand}
            />
          </label>
          <label>
            Model
            <input
              type="text"
              placeholder="model"
              value={model}
              onChange={handleOnChangeModel}
            />
          </label>
          <label>
            Year
            <input
              type="text"
              placeholder="year"
              value={year}
              onChange={handleOnChangeYear}
            />
          </label>
        </div>
        {isEdit ? (
          <button type="button">Edit</button>
        ) : (
          <button type="submit">Add</button>
        )}
        <button type="button">Cancel</button>
      </form>
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
