import express from 'express';
import commentsRoutes from './comments';
import path from 'path';

const router = express.Router();

router.use('/api', commentsRoutes);

router.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/favicon.ico', (request, response) => {
  response.sendFile(path.join(__dirname, '..', 'assets', 'favicon.ico'));
});

export default router;
