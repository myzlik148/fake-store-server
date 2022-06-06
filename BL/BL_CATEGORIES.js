const DL = require('../DL/controllers/categories')


async function getCategories() {
    const categories = await DL.getCategories()
    return categories
}
 
async function newCategory(data) {
    const newcategory = await DL.creatCategory(data)
    return newcategory
}

async function updateCategory(id, data) {
    const updatecategory = await DL.updateCategory(id, data)
    return updatecategory
}

async function deleteCategory(id) {
    const deletecategory = await DL.deleteCategory(id)
    return deletecategory
}

module.exports = { getCategories, newCategory, updateCategory, deleteCategory }