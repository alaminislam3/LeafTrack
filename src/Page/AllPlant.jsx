import React, { useContext } from 'react';
import { Authcontext } from '../Layout/Context/Authcontext';
import AllPlantTable from './AllPlantTable';

const AllPlant = () => {
    const { plants } = useContext(Authcontext);
    // console.log(plants);

    return (
        <div className="max-w-4xl mx-auto p-10 md:my-15 bg-gradient-to-r from-green-100 to-lime-200 ">
            <h2 className="text-2xl font-bold mb-4">🌿 All Plants List</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-base-300">
                            <th>#</th>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {plants.map((plant, index) => (
                            <AllPlantTable key={plant._id} plant={plant} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlant;
