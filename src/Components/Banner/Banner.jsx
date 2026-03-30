import React from 'react';
import { VscDebugStart } from 'react-icons/vsc';

const Banner = () => {
    return (
        <div className='container mx-auto py-20'>

            <div className='lg:flex justify-between items-center gap-14'>

                <div className='space-y-4'>
                    <div className="badge badge-soft badge-primary"><img src="/src/assets/Group 5.png" alt="bedge logo" /> New: AI-Powered Tools Available</div>
                    <h1 className='text-7xl font-extrabold text-[#101727]'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                    <div className='flex gap-4'>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full duration-1000 hover:bg-none border border-[#4F39F6] hover:text-[#4F39F6]">Explore Products</button>
                        <button className="btn bg-transparent border border-[#4F39F6] text-[#4F39F6]  rounded-full duration-1000 hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white"><VscDebugStart /> Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img className='w-full' src="/src/assets/banner.png" alt="" />
                </div>

            </div>



        </div>
    );
};

export default Banner;