// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
// Create app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create comments object
const commentsByPostId = {};

// Create route
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create route
app.post('/posts/:id/comments', (req, res) => {
    // Generate random id
    const commentId = randomBytes(4).toString('hex');
    // Get comment content
    const { content } = req.body;
    // Get comments for post id
    const comments = commentsByPostId[req.params.id] || [];
    // Add comment
    comments.push({ id: commentId, content });
    // Set comments
    commentsByPostId[req.params.id] = comments;
    // Send response
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});