import express from 'express';
import Comment from '@controllers/comments';

const router = express.Router();

router.post('/comments', Comment.create);
router.get('/comments', Comment.all);
router.delete('/comments/:id', Comment.destroy);
router.get('/comments/:id/synthesize', Comment.synthesize);

export default router;
