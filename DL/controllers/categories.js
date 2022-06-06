require('../../db')
const categoryModel=require('../modules/categories')

// async function craetAll(){
//     return await categoryModel.insertMany(categories)
// }
async function getCategories() {
    return await categoryModel.find()
}


async function creatCategory(data) {
    const newcategory = await categoryModel.create(data)
    return newcategory
}


async function updateCategory(id, data) {
    const updateCategory = await categoryModel.findByIdAndUpdate(id, data, { new: true })
    return updateCategory
}


async function deleteCategory(id) {
    const deleteCategory = categoryModel.findByIdAndDelete(id)
    return deleteCategory
}
module.exports={getCategories,creatCategory,updateCategory ,deleteCategory}