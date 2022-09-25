const express = require('express')
const router = express.Router()
const PostModel = require("../models/post")

router.get('/', (req, res) => {

    PostModel.find({}).populate('author').exec((err, posts) => {
        if (!err) return res.json(posts)
        res.status(500).json(err.message)
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)

    // PostModel.find()
})


router.post('/', (req, res) => {
    PostModel.create(req.body, (err, post) => {
        if (!err) return res.json(post)
        res.status(500).json(err.message)
    })
})





// app.use((req, res, next) => {
//     console.log(`${new Date()} - ${req.method} - ${req.url}`) //server 
//     next()
// })

module.exports = { postsRouter: router }







