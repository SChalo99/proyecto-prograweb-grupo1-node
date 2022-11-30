import Order from "../models/order.js";
import OrderProduct from "../models/orderProducts.js";
import Product from "../models/product.js";

const create = async (orderProduct) => {

    try {
        const newOrderProduct = await OrderProduct.create(orderProduct);
            
        return newOrderProduct;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await OrderProduct.findAll([{ include: Order }, { include: Product }]);
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await OrderProduct.findOne({
            where: {
                id: id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(orderProduct) => {
    try {
        const foundOrderProduct = await OrderProduct.findOne({
            where: {
                id: orderProduct.id
            }
        })

        foundOrderProduct.set(orderProduct);

        await foundOrderProduct.save();

        return foundOrderProduct;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await OrderProduct.destroy({
            where: {
                id: id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const OrderProductRepository = { create, findAll, findOne, update, remove }

export default OrderProductRepository