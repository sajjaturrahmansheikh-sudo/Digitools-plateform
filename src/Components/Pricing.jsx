import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='py-20'>

            <div className='container mx-auto space-y-3'>
                <h2 className='text-5xl text-[#101727] font-extrabold text-center'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid lg:grid-cols-3 gap-7 mt-15'>

                    <div className='bg-[#F9FAFC] rounded-lg p-6'>

                        <div className='space-y-2'>
                            <h4 className='text-2xl font-bold text-[#101727]'>Started</h4>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className='text-[#627382] my-5'>
                            <span className='text-4xl font-bold text-[#101727]'>$0</span>/Month
                        </div>
                        <div className='my-6'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Access to 10 free tools</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Basic templates</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Community support</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> 1 project per month</li>
                            </ul>
                        </div>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Get Started Free</button>

                    </div>

                    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg p-6 relative'>
                         <div>
                            <div className="badge badge-warning absolute -top-3 left-5/12">Most Popular</div>
                         </div>
                        <div className='space-y-2'>
                            <h4 className='text-2xl font-bold text-white'>Pro</h4>
                            <p className='text-white'>Best for professionals</p>
                        </div>
                        <div className='text-white my-5'>
                            <span className='text-4xl font-bold text-white'>$29</span>/Month
                        </div>
                        <div className='my-6'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-2 text-white'> <FaCheck className='text-green-400' /> Access to all premium tools</li>
                                <li className='flex items-center gap-2 text-white'> <FaCheck className='text-green-400' /> Unlimited templates</li>
                                <li className='flex items-center gap-2 text-white'> <FaCheck className='text-green-400' /> Priority support</li>
                                <li className='flex items-center gap-2 text-white'> <FaCheck className='text-green-400' /> Unlimited projects </li>
                            </ul>
                        </div>
                        <button className="w-full rounded-full p-[2px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                            <span className="btn block bg-white text-[#4F39F6] rounded-full px-6 py-2">
                                Start Pro Trial
                            </span>
                        </button>

                    </div>
                    <div className='bg-[#F9FAFC] rounded-lg p-6'>

                        <div className='space-y-2'>
                            <h4 className='text-2xl font-bold text-[#101727]'>Enterprise</h4>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <div className='text-[#627382] my-5'>
                            <span className='text-4xl font-bold text-[#101727]'>$99</span>/Month
                        </div>
                        <div className='my-6'>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Everything in Pro</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Team collaboration</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Custom integrations</li>
                                <li className='flex items-center gap-2 text-[#627382]'> <FaCheck className='text-green-400' /> Dedicated support</li>
                            </ul>
                        </div>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full'>Contact Sales</button>


                    </div>

                </div>





            </div>



        </div>
    );
};

export default Pricing;