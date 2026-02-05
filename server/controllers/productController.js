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

        // Update fields (simplified for now, usually checks if fields exist in body)
        // Note: Image update logic adds complexity, skipping for this basic implementation unless requested
        Object.assign(product, req.body);

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
