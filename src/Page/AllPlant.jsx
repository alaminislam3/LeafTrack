import React, { use} from "react";
import { Authcontext } from "../Layout/Context/Authcontext";
import AllPlantTable from "./AllPlantTable";
import { Link } from "react-router";

const AllPlant = () => {
  const { plants } = use(Authcontext);

  return (
    <div className="max-w-4xl md:mt-10 mx-auto p-4 sm:p-6 md:p-10 bg-gradient-to-r from-green-100 to-lime-200 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-800">🌿 All Plants List</h2>

      {/* Table for medium and large devices */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-300">
              <th>#</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <AllPlantTable key={plant._id} plant={plant} index={index} />
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="block md:hidden space-y-4">
        {plants.map((plant, index) => (
          <div
            key={plant._id}
            className="bg-white rounded-xl shadow-md p-4 border border-green-200"
          >
            <h3 className="text-lg font-semibold text-green-700">{index + 1}. {plant.plantName}</h3>
            <p className="text-sm">
              <span className="font-medium">Category:</span> {plant.category}
            </p>
            <p className="text-sm">
              <span className="font-medium">Watering:</span> {plant.wateringFrequency}
            </p>
            <Link to={`/allplant/${plant._id}`}>
           <button className="btn">Details</button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlant;
