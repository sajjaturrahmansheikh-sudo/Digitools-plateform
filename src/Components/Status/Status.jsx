import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-10'>
            <div className='container mx-auto text-white py-4'>
                <div className='grid grid-cols-3 items-center justify-center gap-3 text-center'>
                    <div className='border-r'>
                        <h3 className='text-6xl font-extrabold'>50K+</h3>
                        <h2 className='text-2xl font-medium text-[#fff]'>Active Users</h2>
                    </div>
                    <div>
                        <h3 className='text-6xl font-extrabold'>200+</h3>
                        <h2 className='text-2xl font-medium text-[#fff]'>Premium Tools</h2>
                    </div>
                    <div>
                        <h3 className='text-6xl font-extrabold'>4.9</h3>
                        <h2 className='text-2xl font-medium text-[#fff]'>Rating</h2>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Status;