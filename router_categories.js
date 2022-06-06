const BL = require('./BL/BL_CATEGORIES')

function Router(app) {
    app.get('/categories', async (req, res) => {
        try {
            const categories = await BL.getCategories(req.query.id)
            res.send(categories)
        } catch (error) {
            res.status(400).send(error)
        }
    })

    app.post('/categories', async (req, res) => {
        try {
            const newcategory = await BL.newCategory(req.body)
            res.send(newcategory)
        } catch (error) {
            res.status(400).send(error)
        }
    })
    app.put('/categories', async (req, res) => {
        try {
            const updatecategory = await BL.updateCategory(req.query, req.body)
            res.send(updatecategory)
        } catch (error) {
            res.status(400).send(error)
        }
    })
    app.delete('/categories', async (req, res) => {
        try {
            const deletecategory = await BL.deleteCategory(req.query)
            res.send(deletecategory)
        } catch (error) {
            res.status(400).send(error)
        }

    })

}
module.exports = Router