import React from "react";
import { useLoaderData } from "react-router";

const ViewDetails = () => {
  const datas = useLoaderData();
  console.log(datas);
  const {image,plantName,category,description,wateringFrequency,healthStatus}= datas
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{plantName}</h1>
          <p className="">
            Category : {category}
            
          </p>
          <p>Watering Frequency: {wateringFrequency}</p>
          <p className="font-bold">Health Status: {healthStatus}</p>
          <p>Description: {description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
