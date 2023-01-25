import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./index.css";
const GymDetails = () => {
  const [gymSpecificDetails, setGymSpecificDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getGymSpecificDetails();
  }, []);

  const getGymSpecificDetails = async () => {
    const gymDetails = {
      gym_id: { id },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gymDetails),
    };
    const response = await fetch(
      "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    );
    const info = await response.json();
    const plan = await fetch("https://devapi.wtfup.me/gym/plan", options);
    const planData = await plan.json();
    const gymData = await info.data.filter(
      (eachItem) => eachItem.user_id === id
    );
    console.log(planData);
    console.log(gymData);
    setGymSpecificDetails(...gymData, planData);
  };

  return (
    <div>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <div>
        {gymSpecificDetails.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <img
              src={gymSpecificDetails.cover_image}
              className="image"
              alt="gym"
            />
            <h1>{gymSpecificDetails.gym_name}</h1>
            <p>
              {gymSpecificDetails.address1},{gymSpecificDetails.address2}
            </p>
            <p>{gymSpecificDetails.total_rating} Ratings</p>
            <h3>Description</h3>
            <p>{gymSpecificDetails.description}</p>
            <h3>Facilities</h3>
            <ul>
              {gymSpecificDetails.benefits.map((eachItem) => (
                <li key={eachItem.id}>{eachItem.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default GymDetails;
