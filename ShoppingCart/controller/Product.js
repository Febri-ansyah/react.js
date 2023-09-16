import Product from "../model/ProductModel.js";
export const getAllProduct = async (request, response) => {
    try{
        const products = await Product.findAll();
        response.json(products);
    } catch(error){
        response.json({"message":error.message});
    }
}

export const getProductByID = async (request, response) => {
    try {
        const product = await Product.findAll({
            where:{
                id : request.params.id
            }
        });
        
        response.json(product[0]);
    } catch (error) {
        response.json({"message":error.message});
    }
}

export const createProduct = async (request, response) => {
    try {
        await Product.create(request.body);
        response.json({
            "message": "product created"
        });        
    } catch (error) {
        response.json({"message":error.message});
    }
}

export const updateProduct = async (request, response) => {
    try {
        await Product.update(request.body, {
            where : {
                id:request.params.id
            }
        });
        response.json({
            "message": "product Update"
        });        
    } catch (error) {
        response.json({"message":error.message});
    }
}

export const deleteProduct = async (request, response) => {
    try {
        await Product.destroy(request.body, {
            where : {
                id:request.params.id
            }
        });
        response.json({
            "message": "product Delete"
        });        
    } catch (error) {
        response.json({"message":error.message});
    }
}