import React from 'react';

const AllPlantTable = ({ plant, index }) => {
    return (
        <tr className="bg-green-200 ">
            <td>{index + 1}</td>
            <td>{plant.plantName}</td>
            <td>{plant.category}</td>
            <td>{plant.wateringFrequency}</td>
        </tr>
    );
};

export default AllPlantTable;
