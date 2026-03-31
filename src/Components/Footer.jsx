import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white pt-28 pb-5'>

            <div className='container mx-auto'>

                <div className='grid lg:grid-cols-5 gap-12 mb-18'>
                    <div className='space-y-3.5'>
                        <h3 className='text-3xl font-bold'>DigiTools</h3>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium my-3'>Products</h4>
                        <ul className='space-y-3'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integration</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium my-3'>Company</h4>
                        <ul className='space-y-3'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-medium my-3'>Resources</h4>
                        <ul className='space-y-3'>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl'>Social Links</h3>
                        <div className='flex items-center gap-3 mt-3'>
                            <span className='h-10 w-10 bg-white flex items-center justify-center rounded-full'><FaInstagram className='text-[#101727]'/></span>
                            <span className='h-10 w-10 bg-white flex items-center justify-center
                             rounded-full '><FaFacebook className='text-[#101727]'/></span>
                            <span className='bg-white h-10 w-10 flex items-center justify-center
                             rounded-full '><FaXTwitter className='text-[#101727]'/></span>
                        </div>
                    </div>

                </div>

                <div className='border-t-2 py-4'>
                    <div className='flex flex-col md:flex-row md:justify-between items-center'>
                        <div>
                            <p>&copy; 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service </a>
                            <a href="#">Cookies </a>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default Footer;