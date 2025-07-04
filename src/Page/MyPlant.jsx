// src/Pages/MyPlants.jsx

import React, { use, useEffect, useState } from "react";
import { Authcontext } from "../Layout/Context/Authcontext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const MyPlants = () => {
  const { user } = use(Authcontext);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  //   https://leaf-track-server.vercel.app/myplants/tumpa@g.com

  useEffect(() => {
    setLoading(true);
    fetch(`https://leaf-track-server.vercel.app/myplants/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, [user?.email]);

  if (loading) {
    return <Loading> </Loading>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://leaf-track-server.vercel.app/myplants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your plant has been deleted.", "success");
              setPlants(plants.filter((plant) => plant._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="container md:py-40 mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Plants</h2>

      {plants.length === 0 ? (
        <p>No plants found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {plants.map((plant) => (
            <div key={plant._id} className="p-4 border rounded shadow">
              <img src={plant.image} alt="" />

              <h3 className="text-xl font-semibold">{plant.plantName}</h3>

              <div className="mt-3 flex gap-2">
                <Link
                  to={`/update/${plant._id}`}
                  className="px-4 py-1 bg-blue-500 text-white rounded"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(plant._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
