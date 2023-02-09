const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart } = require('../models/models')

const generateJwt = (Id, Email, Role) => {
    return jwt.sign(
        { Id, Email, Role },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const { Email, Password, Role } = req.body
        if (!Email || !Password) {
            return next(ApiError.badRequest('Некорректный email иди password'))
        }
        const candidate = await User.findOne({ where: { Email } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(Password, 2)
        const user = await User.create({ Email, Password: hashPassword, Role })
        const basket = await Cart.create({ userId: user.Id })
        const token = generateJwt(user.Id, user.Email, user.Role)
        return res.json({token})
    }

    async login(req, res, next) {
        const { Email, Password } = req.body
        const user = await User.findOne({where: {Email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не существует'))
        }

        let comparePassword = bcrypt.compareSync(Password, user.Password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.Id, user.Email, user.Role)
        // const cart = await Cart.create({user.Id})
        
        return res.json({token, user})
    }

    async check(req, res, next) {
        // return res.json({message: "Авторизирован"})
        const token = generateJwt(req.User.Id, req.User.Email, req.User.Role)
        return res.json({token})
    }

    async updateUserData(req, res) {
        const {Id, Email, FirstName, SecondName, Phone } = req.body

        let values = {Email, FirstName, SecondName, Phone}
        let condition = { where : {Id} }; 
        let options = { multi: true };
        // const user = await User.findOne({where: {Id}})

        const updatedUser = await User.update(
            values, condition, options
        )

        const user = await User.findOne({where: {Email}})

        return res.json({user})
        // return res.status(200).send({
        //     message: "Data updated",
        // })
        
    }
}

module.exports = new UserController()