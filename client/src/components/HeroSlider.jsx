import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1615477863670-175cb05420a4?q=80&w=2070&auto=format&fit=crop",

        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1668887461930-44237b5eb558?q=80&w=2070&auto=format&fit=crop",

        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop",

        }
    ];

    return (
        <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] relative mt-20"> {/* margin-top for fixed navbar */}
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full ">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-center"
                            />
                            {/* <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white p-4">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight animate-fade-in-up">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition transform hover:scale-105 duration-300">
                                    Explore Now
                                </button>
                            </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HeroSlider;
