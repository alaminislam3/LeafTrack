import React, { useContext } from "react";
import { Authcontext } from "../Layout/Context/Authcontext";
import { Link } from "react-router";

const NewPlant = () => {
  const { plants } = useContext(Authcontext);

  // Only show the latest 6 plants
  const latestPlants = plants.slice(-6).reverse();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
        🌿 New Arrival
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPlants.map((plant) => (
          <div
            key={plant._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-60 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{plant.plantName}</h2>

              <div className="card-actions justify-end mt-4">
                <Link to={`/plants/${plant._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPlant;
