import React from 'react';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    // Construct image URL (assuming server runs on port 5000)
    // If product.image starts with http, use it, else prepend server url
    const imageUrl = product.image.startsWith('http')
        ? product.image
        : `https://e-commerce-lfmp.onrender.com/${product.image}`;

    const discountPrice = Math.round(product.price - (product.price * (product.discount / 100)));

    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    loading="lazy"
                />

                {/* Discount Badge */}
                {product.discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        -{product.discount}% OFF
                    </div>
                )}

                {/* Overlay Icons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300 translate-x-4 group-hover:translate-x-0">
                    <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-red-500 transition">
                        <FiHeart size={18} />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-green-500 transition">
                        <FaWhatsapp size={18} />
                    </button>
                </div>

                {/* Add to Bag Button (Appears on Hover) */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition duration-300">
                    <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-xl shadow-lg hover:bg-gray-50 flex items-center justify-center gap-2">
                        <FiShoppingBag /> Add to Bag
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2 truncate">{product.category}</p>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-gray-900">₹{discountPrice}</span>
                    {product.discount > 0 && (
                        <span className="text-sm text-gray-400 line-through">₹{product.price}</span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
