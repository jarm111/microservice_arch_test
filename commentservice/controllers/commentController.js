const Comment = require('../models/comment');

exports.postComment = (req, res) => {
  const { blogId, authorName, content } = req.body;

  const comment = new Comment({
    blogId,
    authorName,
    content
  });

  comment.save()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err.message));
};