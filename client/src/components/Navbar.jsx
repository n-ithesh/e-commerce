import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiHeart, FiUser, FiMenu, FiX, FiGlobe, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm overflow-visible">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://techsaint.io/cravella/public/images/customization/company/logo.png"
                                alt="Cravella Logo"
                                className="h-12 md:h-14 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-gray-50/50"
                            />
                            <div className="absolute left-3 top-2.5 text-gray-400">
                                <FiSearch size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-6 text-gray-600">
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-primary transition">
                            <FiGlobe size={22} title="Language" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-green-500 transition">
                            <FaWhatsapp size={22} title="WhatsApp" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-red-500 transition">
                            <FiHeart size={22} title="Wishlist" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-blue-500 transition">
                            <FiShoppingCart size={22} title="Cart" />
                        </motion.div>

                        {user ? (
                            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-red-500 transition" onClick={handleLogout}>
                                <FiLogOut size={22} title="Logout" />
                            </motion.div>
                        ) : (
                            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-primary transition">
                                <Link to="/login"><FiUser size={22} title="Login" /></Link>
                            </motion.div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary p-2">
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-4 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50"
                            />
                            <div className="flex justify-around pt-2 text-gray-600">
                                <FaWhatsapp size={24} />
                                <FiHeart size={24} />
                                <Link to="/admin"><FiUser size={24} /></Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
