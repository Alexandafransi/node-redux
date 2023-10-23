const { configureStore } = require('@reduxjs/toolkit');
const userReducer = require('./slice/user').reducer
const productReducer = require('./slice/product').reducer

const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer
    }
})

module.exports = store;