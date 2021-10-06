import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 18,
    brand: "Fiat",
    model: "2/2B",
    year: "1910",
  },
  {
    id: 22,
    brand: "Audi",
    model: "Type C",
    year: "1912",
  },
  {
    id: 23,
    brand: "Chevrolet",
    model: "Classic Six",
    year: "1910",
  },
  {
    id: 44,
    brand: "Essex",
    model: "Essex A",
    year: "1919",
  },
  {
    id: 5,
    brand: "Hispano-Suiza",
    model: "H6",
    year: "1919",
  },
  {
    id: 64,
    brand: "Lancia",
    model: "Tipo 55 Corsa",
    year: "1908",
  },
  {
    id: 7,
    brand: "Morris",
    model: "Oxford",
    year: "1913",
  },
  {
    id: 8,
    brand: "Opel",
    model: "Rennwagen",
    year: "1913",
  },
  {
    id: 92,
    brand: "Peugeot",
    model: "Type 126",
    year: "1910",
  },
  {
    id: 140,
    brand: "Rolls-Royce",
    model: "Silver Ghost",
    year: "1906",
  },
  {
    id: 121,
    brand: "Vauxhall",
    model: "Prince Henry",
    year: "1911",
  },
  {
    id: 112,
    brand: "Woods",
    model: "Dual Power",
    year: "1917",
  },
];

function App() {
  const [cars, setCars] = useState(data);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [desc, setDesc] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDeleteCar = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const dataTest = cars.filter((car) => car.id !== id);
    setCars(dataTest);
  };

  const handleEdit = (e) => {
    setIsEdit(true);
    const checkId = e.target.parentNode.parentNode.id;
    const data = cars.filter((item) => item.id === checkId);
    setBrand(data[0].brand);
    setModel(data[0].model);
    setYear(data[0].year);
    setId(data[0].id);
  };

  const editCar = () => {
    const editCar = {
      brand: brand,
      model: model,
      year: year,
      id: id,
    };

    let data = cars.filter((item) => item.id !== id);
    data = [...data, editCar];
    setCars(data.reverse());
  };

  const handleOnChangeBrand = (event) => setBrand(event.target.value);
  const handleOnChangeModel = (event) => setModel(event.target.value);
  const handleOnChangeYear = (event) => setYear(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const basicId = toString(Math.floor(Math.random() * 9999));
    const carObject = {
      id: basicId,
      brand: brand,
      model: model,
      year: year,
    };
    setCars((prev) => [...prev, carObject]);
  };

  // IMPROVE:
  const sortByBrand = () => {
    let array;
    if (desc) {
      setDesc(!desc);
      array = [].concat(cars).sort((a, b) => (a.brand > b.brand ? 1 : -1));
    } else {
      setDesc(!desc);
      array = []
        .concat(cars)
        .sort((a, b) => (a.brand > b.brand ? 1 : -1))
        .reverse();
    }
    return setCars(array);
  };
  // IMPROVE:
  const sortByModel = () => {
    let array;

    if (desc) {
      setDesc(!desc);
      array = [].concat(cars).sort((a, b) => (a.model > b.model ? 1 : -1));
    } else {
      setDesc(!desc);
      array = []
        .concat(cars)
        .sort((a, b) => (a.model > b.model ? 1 : -1))
        .reverse();
    }
    return setCars(array);
  };
  // IMPROVE:
  const sortByYear = () => {
    let array;

    if (desc) {
      setDesc(!desc);
      array = [].concat(cars).sort((a, b) => (a.year > b.year ? 1 : -1));
    } else {
      setDesc(!desc);
      array = []
        .concat(cars)
        .sort((a, b) => (a.year > b.year ? 1 : -1))
        .reverse();
    }
    return setCars(array);
  };

  const filterByBrand = () => {
    console.log("filter by brand");
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
          <button type="button" onClick={editCar}>
            Edit
          </button>
        ) : (
          <button type="submit">Add</button>
        )}
        <button type="button">Cancel</button>
      </form>
      <div>
        <br />
        <label>Find by brand</label>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <br />
        <br />
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th>
              <button onClick={sortByBrand}>SORT by </button>
              Brand
            </th>
            <th>
              <button onClick={sortByModel}>SORT by </button>
              Model
            </th>
            <th>
              <button onClick={sortByYear}>SORT by </button>
              Year
            </th>
            <th>Func</th>
          </tr>
        </thead>
        <tbody>
          {cars
            .filter((car) => {
              if (searchTerm === "") {
                return car;
              } else if (
                car.brand
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return car;
              }
            })
            .map((car, index) => (
              <tr id={car.id} key={index}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>
                  <button onClick={handleEdit}>EDIT</button>
                  <button onClick={handleDeleteCar}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
