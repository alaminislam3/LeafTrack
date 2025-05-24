import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Updatepage = () => {
  const { id } = useParams(); // plant ID from route
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  console.log(plant);

  // 1. Get existing plant data
  useEffect(() => {
    fetch(`http://localhost:3000/addplant/${id}`)
      .then((res) => res.json())
      .then((data) => setPlant(data))
      .catch((err) => console.log(err));
  }, [id]);

  // 2. Handle Update Form Submit
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPlant = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/addplant/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Plant updated successfully!",
            timer: 1000,
          });
          navigate("/myplant"); // redirect after update
        } else {
          Swal.fire("Nothing changed!", "", "info");
        }
      });
  };

  if (!plant) {
    return <p className="text-center mt-10">Loading plant data...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-green-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">🌿 Update Plant Info</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="image"
          defaultValue={plant.image}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="plantName"
          defaultValue={plant.plantName}
          placeholder="Plant Name"
          className="input input-bordered w-full"
        />
        <select name="category" defaultValue={plant.category} className="select select-bordered w-full">
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>
        <textarea
          name="description"
          defaultValue={plant.description}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <select name="careLevel" defaultValue={plant.careLevel} className="select select-bordered w-full">
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>
        <input
          type="text"
          name="wateringFrequency"
          defaultValue={plant.wateringFrequency}
          placeholder="Watering Frequency"
          className="input input-bordered w-full"
        />
        <label htmlFor="lastWateredDate">Last Water Date</label>
        <input
          type="date"
          name="lastWateredDate"
          defaultValue={plant.lastWateredDate?.slice(0, 10)}
          className="input input-bordered w-full"
        />
        <label htmlFor="nextWateringDate">Next Watering Date</label>
        <input
          type="date"
          name="nextWateringDate"
          defaultValue={plant.nextWateringDate?.slice(0, 10)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="healthStatus"
          defaultValue={plant.healthStatus}
          placeholder="Health Status"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          name="userEmail"
          defaultValue={plant.userEmail}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="userName"
          defaultValue={plant.userName}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-success w-full">
          Update Plant
        </button>
      </form>
    </div>
  );
};

export default Updatepage;
