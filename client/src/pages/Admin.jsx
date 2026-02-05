import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUpload, FiTrash2, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        discount: '',
        image: null
    });
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // Fetch Products
    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/products');
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleEdit = (product) => {
        setEditingId(product._id);
        setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            category: product.category,
            discount: product.discount || 0,
            image: null // Keep null so we don't re-upload unless changed
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({
            name: '', price: '', description: '', category: '', discount: '', image: null
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('price', formData.price);
        data.append('description', formData.description);
        data.append('category', formData.category);
        data.append('discount', formData.discount);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            if (editingId) {
                await axios.put(`http://localhost:5000/api/products/${editingId}`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Product Updated Successfully!');
                setEditingId(null);
            } else {
                await axios.post('http://localhost:5000/api/products', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('Product Added Successfully!');
            }

            setFormData({
                name: '', price: '', description: '', category: '', discount: '', image: null
            });
            fetchProducts();
        } catch (error) {
            toast.error(editingId ? 'Failed to update product' : 'Failed to add product');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`http://localhost:5000/api/products/${id}`);
                toast.success("Product deleted");
                fetchProducts();
            } catch (error) {
                toast.error("Delete failed");
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <ToastContainer position="top-right" />
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <Link to="/" className="w-auto text-center bg-primary text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md self-end sm:self-auto">
                        Back to Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form Section */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                        <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg focus:ring-primary focus:border-primary" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Price</label>
                                    <input required type="number" name="price" value={formData.price} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Discount (%)</label>
                                    <input type="number" name="discount" value={formData.discount} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input required type="text" name="category" value={formData.category} onChange={handleChange} className="mt-1 w-full p-2 border rounded-lg" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea required name="description" value={formData.description} onChange={handleChange} rows="3" className="mt-1 w-full p-2 border rounded-lg"></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Image</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                    <div className="space-y-1 text-center">
                                        <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="flex text-sm text-gray-600">
                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="image" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {formData.image && <p className="text-xs text-green-600 mt-2">Selected: {formData.image.name}</p>}
                            </div>

                            <div className="flex gap-2">
                                <button type="submit" disabled={loading} className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50">
                                    {loading ? 'Processing...' : (editingId ? 'Update Product' : 'Add Product')}
                                </button>
                                {editingId && (
                                    <button type="button" onClick={handleCancelEdit} disabled={loading} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition">
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Product List Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Product List</h2>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img className="h-10 w-10 rounded-full object-cover" src={`http://localhost:5000/${product.image}`} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                ₹{product.price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-900 ml-4"><FiEdit2 /></button>
                                                <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:text-red-900 ml-4"><FiTrash2 /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {products.length === 0 && <p className="p-6 text-center text-gray-500">No products found.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
