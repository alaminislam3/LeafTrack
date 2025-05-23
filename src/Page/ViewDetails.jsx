import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const datas= useLoaderData()
    console.log(datas);
    return (
        <div>
             THis is viewDetils       
        </div>
    );
};

export default ViewDetails;