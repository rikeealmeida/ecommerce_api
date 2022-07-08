const { Router } = require('express')
const UserController = require('../controllers/user/controller')
const LoginController = require('../controllers/login/controller')
const ProductController = require('../controllers/product/controller')
const CartController = require('../controllers/cart/controller')
const CategoryController = require('../controllers/category/controller')

// const { authenticate } = require('../middlewares/index')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Hello World')
})


routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/login', LoginController.createSession)

routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

routes.post('/carts/:user_id', CartController.createCart)
routes.get('/:user_id/carts', CartController.getUserCarts)
routes.get('/carts/:user_id/:cart_id', CartController.getCart)

routes.post('/category', CategoryController.createCategory)
routes.get('/category',CategoryController.getCategories)


module.exports = routes