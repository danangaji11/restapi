<<<<<<< HEAD
const express = required('express')
const router = express.router()
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../config/validation')

const User = require('../models/User.')

//
const { registerValidation, loginValidation } = requrie('../config/validation') 

function result (succ, msg, details) {
=======
const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")

const User = require('../models/User')

//import validation
const {
    registerValidation,
    loginValidation
} = require('../config/validation')

function result(succ, msg, details) {
>>>>>>> 60750307bf56d972346d9a91892f8b920233a410
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

<<<<<<< HEAD
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

=======
//register
router.post('/register', async (req, res) => {
    const { error } = registerValidation(req.body)
    if (error) return res.status(200).json(result(0, error.details[0].message))

    //username exist
    const usernameExist  = await User.findOne({ username: req.body.username })
    if (usernameExist) return res.status(200).json(result(0, 'Username already exists!'))

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        username: req.body.username,
        password: hashPassword
    })

    try {
        const saveUser = await user.save()
        res.status(200).json(result(1, 'Register User Success!', saveUser))
    } catch (error) {
        res.status(200).json(result(0, 'Register User Failed!'))
    }
})

//login
router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(200).json(result(0, error.details[0].message));

  //username exist
  const user = await User.findOne({
    username: req.body.username,
  });
  if (!user) return res.status(200).json(result(0, "Your username is not registered!"))

  //check password
  const validPwd = await bcrypt.compare(req.body.password, user.password)
  if(!validPwd) return res.status(200).json(result(0, 'Your password is wrong!'))

  return res.status(200).json(result(1, 'Login User Success!', user))
>>>>>>> 60750307bf56d972346d9a91892f8b920233a410
})