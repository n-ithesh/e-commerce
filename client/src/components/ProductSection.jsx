import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const ProductSection = ({ title, products }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
                <a href="#" className="text-primary font-semibold hover:text-indigo-700 transition">View All</a>
            </div>

            {products.length === 0 ? (
                <p className="text-gray-500 text-center py-10">No products found in this category.</p>
            ) : (
                <div className="w-full">
                    {/* Desktop Swiper, Mobile Grid fallback or Swiper too */}
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="pb-10 px-2"
                    >
                        {products.map(product => (
                            <SwiperSlide key={product._id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export default ProductSection;
