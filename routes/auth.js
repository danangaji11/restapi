const express = required('express')
const router = express.router()
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../config/validation')

const User = require('../models/User.')

//
const { registerValidation, loginValidation } = requrie('../config/validation') 

function result (succ, msg, details) {
    if (details) {
        return {
            success: succ,
            message: msg,
            data: details
        }
    } else {
        return {
            success: succ,
            message: msg
        }
    }
}

    //
    router.post('/register', async (req, res) => {
    const { 
        error
    } = registerValidation(req.body)
    if (error) return res.status(200).json(result(0, error.details[0].message))

    //
    const usernameExist = await User.findOne({
    username: req.body.username
})
if (usernameExist) return res.status(200).json(result(0,'Username already exists!'))

})