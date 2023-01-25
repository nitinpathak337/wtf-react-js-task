import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Content = () => {
  const [gymList, setGymList] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    getList();
  }, [city]);

  const selectedCity = async (event) => {
    await setCity(event.target.value);
    getList();
  };

  const getList = async () => {
    const response = await fetch(
      `https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231&city=${city}`
    );
    if (response.ok === true) {
      const list = await response.json();
      console.log(list.data);
      setGymList(list.data);
    }
  };

  return (
    <div>
      <input
        className="search-gym-input"
        type="search"
        placeholder="Search gym name here..."
      />
      <div className="filter-near-gym-section">
        <div className="filters-container">
          <h1>Filters</h1>
          <label htmlFor="location-search">Location</label>
          <input
            type="search"
            placeholder="Enter Location"
            id="location-search"
          />
          <label htmlFor="price">Price</label>
          <div>
            <input
              type="text"
              placeholder="Min"
              id="price"
              className="min-max-text"
            />
            <input
              type="text"
              placeholder="Max"
              id="price"
              className="min-max-text"
            />
          </div>
          <label htmlFor="cities">Cities</label>
          <select id="cities" name={city} onChange={selectedCity}>
            <option disabled selected hidden>
              Select city
            </option>

            <option value="delhi">Delhi</option>
            <option value="noida">Noida</option>
          </select>
        </div>
        <div className="nearest-gym-container">
          <ul className="list-container">
            {gymList.map((eachItem) => (
              <Link
                to={`/gym/${eachItem.user_id}`}
                key={eachItem.user_id}
                className="list-item"
              >
                <img
                  className="list-gym-image"
                  src="https://webthemez.com/demo/champ-fitness-gym-html5-bootstrap-template/images/portfolio/06.jpg"
                  alt="gym"
                />
                <div>
                  <h1>{eachItem.gym_name}</h1>
                  <p>
                    {eachItem.address1},{eachItem.address2}
                  </p>
                  <p>
                    {eachItem.duration_text} away | {eachItem.distance_text}
                  </p>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
