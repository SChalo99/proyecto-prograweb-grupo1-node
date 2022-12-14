import { where } from "sequelize";
import Category from "../models/category.js";
import Product from "../models/product.js";


const create = async (product) => {

    try {
        const newProduct = await Product.create(product);
            
        return newProduct;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async(id) => {

    try {
        return await Product.findAll({include: Category, 
            where: {
                category_id: parseInt(id)
        }});
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Product.findOne({
            where: {
                id: parseInt(id)
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }
}


const update = async(product) => {
    try {
        const foundProduct = await Product.findOne({
            where: {
                id: parseInt(product.id)
            }
        })

        foundProduct.set(product);

        await foundProduct.save();

        return foundProduct;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Product.destroy({
            where: {
                id: parseInt(id)
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ProductRepository = { create, findAll, findOne, update, remove }

export default ProductRepository