import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductSection from '../components/ProductSection';
import PromoBanner from '../components/PromoBanner';
import ContactStrip from '../components/ContactStrip';
import Footer from '../components/Footer';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products');
                setProducts(res.data);

                // Simple logic to split products for demo purposes
                // In real app, might fetch by category or flag
                setNewArrivals(res.data.slice(0, 5));
                setBestSellers(res.data.slice(5, 10)); // Assuming there are enough products

                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />
            <HeroSlider />

            <ProductSection title="New Arrivals" products={newArrivals.length > 0 ? newArrivals : products.slice(0, 4)} />

            <ProductSection title="Best Sellers" products={bestSellers.length > 0 ? bestSellers : products.slice(0, 4)} />
                
            <PromoBanner />



            <ContactStrip />
            <Footer />
        </div>
    );
}

export default Home;
