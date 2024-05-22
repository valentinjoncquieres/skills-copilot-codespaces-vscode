// Create web server
// Create a new web server using express.js
const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Define a route
app.get('/comments', (req, res) => {
  res.send('Comments route');
});
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use(comments);
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use('/api', comments);
// Path: comments.js
// Define a new route
// Define a new route that returns an array of comments.
const express = require('express');
const router = express.Router();
router.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', body: 'Hello, world!' },
    { id: 2, author: 'Jane', body: 'Hi there!' },
  ]);
});
module.exports = router;
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use('/api', comments);
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use('/api', comments);
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use('/api', comments);
// Path: index.js
// Import comments.js
// Import the comments.js file and use the route defined in it.
const comments = require('./comments');
app.use('/api', comments);
// Path: comments.js
// Define a new route
// Define a new route that returns an array of comments.
const express = require('express');
const router = express.Router();
router.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', body: 'Hello, world!' },
    { id: 2, author: 'Jane', body: 'Hi there!' },
  ]);
});