import React from "react";
import { Link } from "react-router";

const AllPlantTable = ({ plant, index }) => {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{plant.plantName}</td>
        <td>{plant.category}</td>
        <td>{plant.wateringFrequency}</td>
        <td>
          <Link to={`/allplant/${plant._id}`}>
            <button className="btn bg-gradient-to-r from-green-100 to-lime-200">
              Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AllPlantTable;
