require('../../db')
const productModel = require('../modules/products')
//const { getCategories } = require('../categories')
const categoryModel = require('../modules/categories')

async function craetAll() {
    const categories = await categoryModel.find()
    return await productModel.insertMany(
        products.map(pr => ({
            ...pr, category: categories
                .find(c => c.name == pr.category)._id
        })))
}


async function getAll() {
    return await productModel.find()
}

async function creatProduct(data) {
    const newproduct = await productModel.create(data)
    return newproduct
}

async function updateProduct(id, data) {
    const updateProduct = await productModel.findByIdAndUpdate(id, data, { new: true })
    return updateProduct
}

async function deleteProduct(id) {
    const deleteProduct = productModel.findByIdAndDelete(id)
    return deleteProduct
}

module.exports = { getAll, creatProduct, updateProduct ,deleteProduct}