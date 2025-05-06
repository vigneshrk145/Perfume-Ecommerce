const Product = require('../modules/product');
const cloundinary = require('../configure/cloundinary');

const createProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);


    }
    catch (err) {
        console.log(err);
    }
}


const addProduct = async (req, res) => {

    const { description, price } = req.body;

    try {


        if (!req.file) {
            return res.status(400).json({ error: "Image file is required" });
        }

        const fileType = req.file.mimetype.split("/")[0];
        let resourceType;
        if (fileType === "image") {
            resourceType = "image";
        } else {
            return res.status(400).json({
                error: "Invalid file type. Only images are allowed.",
            });
        }

        const result = cloundinary.uploader.upload_stream(
            {
                resource_type: resourceType,
                folder: "product",
            },
            async (error, cloudinaryResult) => {
                if (error) {
                    console.error("Cloudinary upload error:", error);
                    return res.status(500).json({ error: "Cloudinary upload failed" });
                }

                try {
                    const newproduct = new Product({
                        description,
                        price,

                        image: cloudinaryResult.secure_url,
                        publicId: cloudinaryResult.public_id,

                        // createdAt and updatedAt will use default values
                    });

                    const savedSunglass = await newproduct.save();
                    res.status(201).json({
                        success: true,
                        message: "Sunglass added successfully",
                        data: savedSunglass
                    });
                } catch (saveError) {
                    console.error("Error saving to database:", saveError);
                    res.status(500).json({ error: "Failed to save sunglass data" });
                }
            }
        );

        result.end(req.file.buffer);


      
    }

    catch (err) {
        console.log(err);
    }
}




module.exports = {
    createProduct, addProduct
}