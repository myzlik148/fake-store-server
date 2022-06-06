const BL = require('./BL/BL_PRODUCTS')
function Router(app) {

    app.get('/products', async (req, res) => {

        try {
            const products = await BL.getProducts(req.query.id)
            res.send(products)
        } catch (error) {
            res.status(400).send(error)
        }
    })



    app.post('/products', async (req, res) => {
        try {
            const newProduct = await BL.newProduct(req.body)
            res.send(newProduct)
        } catch (error) {
            res.status(400).send(error)
        }
    })
    app.put('/products', async (req, res) => {
        try {
            const updateProduct = await BL.update(req.query, req.body)
            res.send(updateProduct)
        } catch (error) {
            res.status(400).send(error)
        }
    })
    app.delete('/products', async (req, res) => {
        try {
            const deleteProduct = await BL.deleteProduct(req.query)
            res.send(deleteProduct)
        } catch (error) {
            res.status(400).send(error)
        }

    })

}
module.exports = Router