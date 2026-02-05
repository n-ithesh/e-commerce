import React from 'react';
import { motion } from 'framer-motion';

const PromoBanner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 flex items-center">
                {/* Background Image/Gradient */}
                <div className="absolute inset-0">
                    <img
                        src="https://techsaint.io/cravella/public/images/customization/banner/64b2c31a-bc4b-420f-b603-8c0c3a6cdffd.jpg"
                        alt="Promo Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Glass Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 ml-8 md:ml-16 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl max-w-lg text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Merry Christmas !</h2>
                    <p className="text-indigo-100 mb-6 text-lg">Your banner description goes here</p>
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition shadow-lg">
                       Buy Now
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default PromoBanner;
