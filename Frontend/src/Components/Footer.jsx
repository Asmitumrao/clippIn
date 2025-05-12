import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '/assets/logo.png'
function Footer() {
    return (
        <div className='bg-[#FFF9EA] p-4'>
            <div className='grid grid-cols-4 gap-6 p-2'>
                <div className='grid rows-3 gap-4 p-5'>
                    <div className="max-h-20 overflow-hidden">
                        <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
                    </div>
                    <div>ABES Engineering College, Ghaziabad</div>
                    <div className="flex space-x-6 text-3xl text-gray-600">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400" />
                        </a>
                    </div>
                </div>
                <div className="p-4 grid grid-rows-[auto_1fr] gap-6 p-8">
                    <div className="text-2xl font-semibold">Company</div>
                    <div className="flex flex-col space-y-3 text-md">
                        <div>About Us</div>
                        <div>Career</div>
                        <div>How It Works</div>
                    </div>
                </div>

                <div className="p-4 grid grid-rows-[auto_1fr] gap-6 p-8">
                    <div className="text-2xl font-semibold">Policy</div>
                    <div className="flex flex-col space-y-3 text-md">
                        <div>FAQs</div>
                        <div>Privacy</div>
                        <div>Shipping</div>
                    </div>
                </div>
                <div className="p-4 grid grid-rows-[auto_1fr] gap-6 p-8">
                    <div className="text-2xl font-semibold">Get In Touch</div>
                    <div className="flex flex-col space-y-3 text-md">
                        <div>+91 9311671893</div>
                        <div>clipin@gmail.com</div>
                        <div>Clipin_food@outlook.com</div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-400 my-5" />
            <div className="text-center text-sm text-gray-500 py-4">
                © 2025 Clipin. ALL RIGHTS RESERVED.
            </div>
        </div>
    );
}

export default Footer;
