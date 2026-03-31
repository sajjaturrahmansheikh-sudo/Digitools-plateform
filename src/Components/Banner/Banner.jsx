import React from 'react';
import { VscDebugStart } from 'react-icons/vsc';
import bannerImg from '../../assets/banner.png';
import badgeImg from '../../assets/Group 5.png';

const Banner = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='lg:flex justify-between items-center gap-14'>

                <div className='space-y-4'>
                    <div className="badge badge-soft badge-primary">
                        <img src={badgeImg} alt="badge logo" />
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className='text-7xl font-extrabold text-[#101727]'>
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    <div className='flex gap-4'>
                        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full border border-[#4F39F6] hover:bg-transparent hover:text-[#4F39F6]">
                            Explore Products
                        </button>

                        <button className="btn bg-transparent border border-[#4F39F6] text-[#4F39F6] rounded-full hover:bg-gradient-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white">
                            <VscDebugStart /> Watch Demo
                        </button>
                    </div>
                </div>

                <div>
                    <img className='w-full' src={bannerImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;