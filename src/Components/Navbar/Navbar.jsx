import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className='font-semibold text-[#101727]' href="#">Porducts</a></li>
                            <li><a className='font-semibold text-[#101727]' href="#">Freature</a></li>
                            <li><a className='font-semibold text-[#101727]' href="#">Pricing</a></li>
                            <li><a className='font-semibold text-[#101727]' href="#">Testimonial</a></li>
                            <li><a className='font-semibold text-[#101727]' href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <h2 className='font-bold text-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>DigiTools</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='font-semibold text-[#101727]' href="#">Porducts</a></li>
                        <li><a className='font-semibold text-[#101727]' href="#">Freature</a></li>
                        <li><a className='font-semibold text-[#101727]' href="#">Pricing</a></li>
                        <li><a className='font-semibold text-[#101727]' href="#">Testimonial</a></li>
                        <li><a className='font-semibold text-[#101727]' href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-4'>
                        <MdOutlineShoppingCart />
                        <a className='font-semibold text-[#101727]' href="#">Login</a>
                        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;