import express from 'express';
import commentsRoutes from './comments';
import path from 'path';

const router = express.Router();

router.use(express.static(path.join(__dirname, '..', 'public')));
router.use('/api', commentsRoutes);

export default router;
