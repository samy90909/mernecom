import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const product = await product.find({})
        console.log("product called")
        res.status(200).json({ success: true, message: "Data Fetched Sucessfully" });
    } catch (error) {
        console.log("fetching error", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;

        if (!mongoose.Types.objectId.isValid(id)) {

            return res.status(200).json({ success: false, message: "Put the correct value" })
        }


        try {
            await Product.findByIdAndUpdate(id, product, { new: true })
            res.status(200).json({ success: false, message: "Updated successfull" })
        } catch (error) {
            res.status(500).json({ success: false, message: "error while updating" })
        }
    } catch (error) {
        console.log("Error in updating", error.message);
        res.status(400).json({ success: true, message: "Error in updating" })
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ succuess: true, message: "Error while fetching the data" });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product created" });

    } catch (error) {
        console.error("Error in Create Product ", error.message);
        res.status(500).json({ success: false, message: "Error in product creation" })
    }

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" });

    }
    catch (error) {
        console.log("Error in product");
    }
}
