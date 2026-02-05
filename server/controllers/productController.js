const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, price, description, category, discount } = req.body;
    const image = req.file ? req.file.path : null;

    if (!image) {
        return res.status(400).json({ message: 'Image is required' });
    }

    // Normalize path separators to forward slashes for URL usage
    const normalizedImagePath = image.replace(/\\/g, '/');

    const product = new Product({
        name,
        price,
        description,
        category,
        discount,
        image: normalizedImagePath,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const { name, price, description, category, discount } = req.body;

        // Update text fields
        if (name) product.name = name;
        if (price) product.price = price;
        if (description) product.description = description;
        if (category) product.category = category;
        if (discount) product.discount = discount;

        // Update image if a new one is uploaded
        if (req.file) {
            // Delete old image if it's a local file
            if (product.image && !product.image.startsWith('http')) {
                const oldImagePath = path.resolve(product.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlink(oldImagePath, (err) => {
                        if (err) console.error('Failed to delete old image:', err);
                    });
                }
            }
            // Set new image path
            product.image = req.file.path.replace(/\\/g, '/');
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Delete image file if it exists
        if (product.image) {
            const imagePath = path.resolve(product.image);
            if (fs.existsSync(imagePath)) {
                fs.unlink(imagePath, (err) => {
                    if (err) console.error('Failed to delete local image:', err);
                });
            }
        }

        await product.deleteOne();
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
