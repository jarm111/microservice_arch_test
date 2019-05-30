const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  blogId:  {
    type: String, 
    required: [true, 'Blog ID is required']
  },
  authorName: {
    type: String,
    required: [true, 'Author name is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  date: { type: Date, default: Date.now },
});

module.export = mongoose.model('comment', commentSchema);