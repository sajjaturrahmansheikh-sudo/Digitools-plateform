import React from 'react';
import userImg from '../assets/user.png';
import packageImg from '../assets/package.png';
import rocketImg from '../assets/rocket.png';

const Getstarted = () => {
    return (
        <div className='py-20 bg-[#F9FAFC]'>

            <div className='container mx-auto space-y-3'>
                <h2 className='text-[#101727] text-5xl font-extrabold text-center'>
                    Get Started in 3 Steps
                </h2>
                <p className='text-[#627382] text-center'>
                    Start using premium digital tools in minutes, not hours.
                </p>

                <div className='grid md:grid-cols-3 items-center gap-8'>

                    {/* Card 1 */}
                    <div className='bg-white rounded-lg pt-6 pb-20 px-4'>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex justify-center items-center rounded-full ml-auto'>
                            01
                        </span>

                        <div className='text-center space-y-4 mt-3.5'>
                            <img className='p-5 bg-gradient-to-r from-[#4f39f64e] to-[#9614fa44] rounded-full mx-auto' src={userImg} alt="" />
                            <h4 className='text-2xl font-bold text-[#101727]'>Create Account</h4>
                            <p className='text-[#627382]'>
                                Sign up for free in seconds. No credit card required.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-white rounded-lg pt-6 pb-20 px-4'>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex justify-center items-center rounded-full ml-auto'>
                            02
                        </span>

                        <div className='text-center space-y-4 mt-3.5'>
                            <img className='p-5 bg-gradient-to-r from-[#4f39f64e] to-[#9614fa44] rounded-full mx-auto' src={packageImg} alt="" />
                            <h4 className='text-2xl font-bold text-[#101727]'>Choose Products</h4>
                            <p className='text-[#627382]'>
                                Browse our catalog and select the tools that fit your needs.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-white rounded-lg pt-6 pb-20 px-4'>
                        <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white w-10 h-10 flex justify-center items-center rounded-full ml-auto'>
                            03
                        </span>

                        <div className='text-center space-y-4 mt-3.5'>
                            <img className='p-5 bg-gradient-to-r from-[#4f39f64e] to-[#9614fa44] rounded-full mx-auto w-[60px] h-[60px] object-contain' src={rocketImg} alt="" />
                            <h4 className='text-2xl font-bold text-[#101727]'>Start Creating</h4>
                            <p className='text-[#627382]'>
                                Download and start using your premium tools immediately.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Getstarted;