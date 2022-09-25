const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')

router.get('/', (req, res) => {

    //get all users
    const cond = {}

    UserModel.find(cond, (err, users) => {
        if (!err) return res.json(users)
        res.status(500).json(err.message)
    })


})



router.get('/:id', (req, res) => {
    // get single user by id
    UserModel.find({ _id: req.params.id }, (err, user) => {
        if (!err) return res.json(user)
        res.status(500).json(err.message)
    })

})


router.post('/', (req, res) => {
    const data = {
        fristName: req.body.firstName,
        fristName: req.body.firstName,
        email: req.body.email,
        dob: new Date()
    }
    const user = new UserModel(data)
    user.save((err, savedUser) => {
        if (!err) return res.json(savedUser)
        //next(err)
        console.log(err)
        res.status(500).json(err.message)
    })

})

// app.use((req, res, next) => {
//     console.log(`${new Date()} - ${req.method} - ${req.url}`) //server 
//     next()
// })

module.exports = { userRouter: router }







