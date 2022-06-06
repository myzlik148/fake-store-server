require("./db")()
require('dotenv').config()
// require('./DL/controllers/products')
// require('./DL/controllers/categories')
const express = require('express'),
    PORT = process.env.PORT,
    app = express()

app.use(express.json())

require('./router_products')(app)
require('./router_categories')(app)

app.listen(PORT, () => console.log(`server is running.. port is : ${PORT} `));