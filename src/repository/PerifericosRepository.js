import Product from '../models/product.js';

const getallperifericos = async() => {
    try {
        return await Product.findAll({
            where: {
                category_id: 2
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }
}

const PerifericosRepository = { getallperifericos }

export default PerifericosRepository