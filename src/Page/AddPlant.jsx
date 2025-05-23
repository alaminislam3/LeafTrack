import React, { use } from "react";
import { Authcontext } from "../Layout/Context/Authcontext";
import Swal from "sweetalert2";

const AddPlant = () => {
  const { user } = use(Authcontext);
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateForm = Object.fromEntries(formData.entries());
    console.log(updateForm);
    //  send data to db
    fetch("http://localhost:3000/addplant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Plant Successful!",

            timer: 1000,
          });
        } else {
          Swal.fire({
            icon: "Error",
            title: "OPPS Something went wrong!",

            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-3xl bg-gradient-to-r from-green-100 to-lime-200 md:mt-10 mx-auto p-6 bg-base-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🌱 Add a New Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="plantName"
          placeholder="Plant Name"
          className="input input-bordered w-full"
        />

        <select
          name="category"
          value={handleSubmit.category}
          className="select select-bordered w-full"
        >
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <select
          name="careLevel"
          value={handleSubmit.category}
          className="select select-bordered w-full"
        >
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>

        <input
          type="text"
          name="wateringFrequency"
          placeholder="Watering Frequency "
          className="input input-bordered w-full"
        />

        <label htmlFor="Last Water Date">Last Water Date</label>
        <input
          type="date"
          name="lastWateredDate"
          className="input input-bordered w-full"
        />
        <label htmlFor="Next Water Date">Next Watering Date</label>
        <input
          type="date"
          name="nextWateringDate"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="healthStatus"
          placeholder="Health Status"
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="userEmail"
          placeholder="User Email"
          defaultValue={user?.email}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="userName"
          placeholder="User Name"
          defaultValue={user?.displayName}
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
