import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
                    {/* Column 1: General */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">General</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition">About Us</li>
                            <li className="hover:text-white cursor-pointer transition">Contact Us</li>
                            <li className="hover:text-white cursor-pointer transition">Stores</li>
                        </ul>
                    </div>

                    {/* Column 2: Policies */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Policies</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer transition">Return & Refund</li>
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Categories</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition">All</li>
                            <li className="hover:text-white cursor-pointer transition">Pastry</li>
                            <li className="hover:text-white cursor-pointer transition">Cake</li>
                        </ul>
                    </div>

                    {/* Column 4: Pastry */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Pastry</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition">Puffs</li>
                        </ul>
                    </div>

                    {/* Column 5: Cake */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Cake</h4>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer transition">Wedding cake</li>
                            <li className="hover:text-white cursor-pointer transition">Cake</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Middle Section: Follow Us & Download */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

                    {/* Follow Us */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold mb-4 text-lg">Follow Us</h4>
                        <div className="flex space-x-6">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                            <FaYoutube className="text-2xl cursor-pointer hover:text-red-500 transition" />
                        </div>
                    </div>

                    {/* Download On */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="font-bold mb-4 text-lg">Download On</h4>
                        <div className="flex space-x-4">
                            {/* Google Play */}
                            <button className="flex items-center space-x-2 bg-transparent border border-gray-600 rounded-lg px-3 py-1.5 hover:border-white transition">
                                <FaGooglePlay className="text-xl" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase leading-none">Get it on</div>
                                    <div className="text-sm font-semibold">Google Play</div>
                                </div>
                            </button>

                            {/* App Store */}
                            <button className="flex items-center space-x-2 bg-transparent border border-gray-600 rounded-lg px-3 py-1.5 hover:border-white transition">
                                <FaApple className="text-2xl" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase leading-none">Download on the</div>
                                    <div className="text-sm font-semibold">App Store</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Bottom Copyright */}
                <div className="text-center space-y-2 text-sm text-gray-400">
                    <p>Copyright © 2026 <span className="text-blue-500 font-semibold">CRAVELLA</span> All Rights Reserved.</p>
                    <p>Developed with ❤️ by Techsaint</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
