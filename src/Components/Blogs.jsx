import React from 'react';
import fourImg from '../assets/forth.jpg';
import fiveImg from '../assets/five.jpg';
import sixImg from '../assets/six.jpg';

const Blogs = () => {
    return (
        <div className='bg-green-100 py-8'>
            <h2 className='text-3xl text-green-600 text-center mb-6'>Read Blogs</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
                <div className='text-center'>
                    <img className='w-2/3 h-24 md:h-72 lg:h-96 mx-auto' src={fourImg} alt="Blog 1" />
                    <p className='mt-4 text-lg text-green-800'>View more..</p>
                </div>
                
                <div className='text-center'>
                    <img className='w-2/3 h-24 md:h-72 lg:h-96 mx-auto' src={fiveImg} alt="Blog 2" />
                    <p className='mt-4 text-lg text-green-800'>View more..</p>
                </div>
                
                <div className='text-center'>
                    <img className='w-2/3 h-24 md:h-72 lg:h-96 mx-auto' src={sixImg} alt="Blog 3" />
                    <p className='mt-4 text-lg text-green-800'>View more..</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
