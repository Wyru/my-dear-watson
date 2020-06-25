import express from 'express';
import Comment from '@controllers/comments';
import cors from 'cors';

const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/comments', Comment.create);
app.get('/api/comments', Comment.all);
app.delete('/api/comments/:id', Comment.destroy);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3333).on('listening', () => {
  console.log('\n\x1b[30m\x1b[47m%s\x1b[0m', 'Test Watson');
  console.log('\nrunning on \x1b[32m%s\x1b[0m', 'http://localhost:3333');
});
