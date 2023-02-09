const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Email: {type: DataTypes.STRING, unique: true},
    Password: {type: DataTypes.STRING},
    Role: {type: DataTypes.STRING, defaultValue: "USER"},
    FirstName: {type: DataTypes.STRING,allowNull: true },
    SecondName: {type: DataTypes.STRING, allowNull: true},
    Adress: {type: DataTypes.STRING,allowNull: true },
    Phone: {type: DataTypes.STRING, allowNull: true},
})

const Cart = sequelize.define('cart', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartProduct = sequelize.define('cart_product', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Quantity: {type: DataTypes.INTEGER, allowNull: false},
})

const Product = sequelize.define('product', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Price: {type: DataTypes.INTEGER, allowNull: false},
    Image: {type: DataTypes.STRING, allowNull: false},
    Count: {type: DataTypes.INTEGER, allowNull: false},
    Description: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
})

const Category = sequelize.define('category', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductStatus = sequelize.define('product_status', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ProductInfo = sequelize.define('product_info', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Description: {type: DataTypes.STRING, allowNull: false},
})

const Order = sequelize.define('order', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Date: {type: DataTypes.DATE, allowNull: false},
})

const Delivery = sequelize.define('delivery', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Type: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Payment = sequelize.define('payment', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Type: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const OrderStatus = sequelize.define('order_status', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const OrderProduct = sequelize.define('order_product', {
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// const Customer = sequelize.define('customer', {
//     Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     FirstName: {type: DataTypes.STRING,allowNull: false },
//     SecondName: {type: DataTypes.STRING, allowNull: false},
//     Adress: {type: DataTypes.STRING,allowNull: false },
//     Phone: {type: DataTypes.STRING, allowNull: false},
// })

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.hasMany(CartProduct)
CartProduct.belongsTo(Cart)

Category.hasMany(Product)
Product.belongsTo(Category)

Brand.hasMany(Product)
Product.belongsTo(Brand)

ProductStatus.hasMany(Product)
Product.belongsTo(ProductStatus)

Product.hasMany(CartProduct)
CartProduct.belongsTo(Product, {as: 'product'})

Product.hasMany(ProductInfo, {as: 'info'})
ProductInfo.belongsTo(Product)

User.hasMany(Order)
Order.belongsTo(User)

OrderStatus.hasMany(Order)
Order.belongsTo(OrderStatus)

Delivery.hasMany(Order)
Order.belongsTo(Delivery)

Payment.hasMany(Order)
Order.belongsTo(Payment)

Order.hasMany(OrderProduct)
OrderProduct.belongsTo(Order)

Product.hasMany(OrderProduct)
OrderProduct.belongsTo(Product)

// User.hasOne(Customer)
// Customer.belongsTo(User)


module.exports = {
    User,
    Cart,
    CartProduct,
    Category,
    Brand,
    Product,
    ProductInfo,
    // Customer,
    Order,
    Delivery,
    Payment,
    OrderStatus,
    OrderProduct
}


