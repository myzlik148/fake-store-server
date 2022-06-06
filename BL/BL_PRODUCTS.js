const DL = require('../DL/controllers/products')

async function getProducts(id) {
    const products = await DL.getAll()
    if (!id) {
        return products
    }
    else {
        const product = products.find(p => p.id == id)
        if (product)
            return product
        else {
            throw `no product with id : ${id}`
        }
    }
}

async function newProduct(data){
const newProduct=await DL.creatProduct(data)
return newProduct
}

async function update(id,data){
    const updateProduct= await DL.updateProduct(id,data)
    return updateProduct
}

async function deleteProduct(id){
    const deleteProduct =await DL.deleteProduct(id)
    return deleteProduct
}

module.exports={getProducts,newProduct,update,deleteProduct}