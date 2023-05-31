const Joi = require('joi')
<<<<<<< HEAD
const { schema } = require('../models/Post')

const registerValidation = (data) => {
    const Schema = Joi.object({
=======

const registerValidation = (data) => {
    const schema = Joi.object({
>>>>>>> 60750307bf56d972346d9a91892f8b920233a410
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
}

<<<<<<< HEAD
constloginValidation = (data) => {
    const schema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().min(6).required()
        })
        
        return schema.validate(data)
=======
const loginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data)
>>>>>>> 60750307bf56d972346d9a91892f8b920233a410
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation