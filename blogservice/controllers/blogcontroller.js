const config = require('../config/config'),
    post = require('../models/blogs.js')

exports.postBlog = (req, res, next) => {
    const blogpost = new post({
        title: req.body.title,
        post: req.body.post,
        userID: req.body.userID,
        user: req.body.user
    });
    blogpost.save()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: 'serveri paskoi alleen',
                additional: err.message
            });
        });
};
exports.getAllBlogs = (req, res, next) => {
    post.find({})
        .then(posts => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(posts)
        }).catch(err => {
            res.status(500).send({
                message: 'serveri paskoi alleen',
                additional: err.message
            });
        });
}

exports.getBlog = (req, res, next) => {
    post.findById(req.params.id)
        .then(post => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(post)
        }).catch(err => {
            res.status(500).send({
                message: 'serveri paskoi alleen',
                additional: err.message
            });
        });
}